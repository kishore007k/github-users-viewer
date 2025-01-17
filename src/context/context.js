import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = React.createContext();

const GitHubProvider = ({ children }) => {
	const [githubUser, setGitHubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(mockFollowers);

	// request loading
	const [request, setRequest] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	// error
	const [error, setError] = useState({ show: false, msg: "" });

	const searchGitHubUser = async (user) => {
		toggleError();
		setIsLoading(true);
		const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
			console.log(err)
		);

		if (response) {
			setGitHubUser(response.data);
			const { login, followers_url } = response.data;
			// Repos
			await Promise.allSettled([
				axios(`${rootUrl}/users/${login}/repos?per_page=100`),
				axios(`${followers_url}?per_page=100`),
			]).then((result) => {
				const [repos, followers] = result;
				const status = "fulfilled";
				if (repos.status === status) {
					setRepos(repos.value.data);
				}
				if (followers.status === status) {
					setFollowers(followers.value.data);
				}
			});
		} else {
			toggleError(true, "There is no User with that UserName");
		}
		checkRequests();
		setIsLoading(false);
	};
	// Check rate
	const checkRequests = () => {
		axios(`${rootUrl}/rate_limit`)
			.then(({ data }) => {
				let {
					rate: { remaining },
				} = data;
				setRequest(remaining);
				if (remaining === 0) {
					toggleError(true, "Sorry, You exceeded your hourly search limit!");
				}
			})
			.catch((err) => console.log(err));
	};

	function toggleError(show = false, msg = "") {
		setError({ show, msg });
	}
	useEffect(checkRequests, []);

	return (
		<GitHubContext.Provider
			value={{
				githubUser,
				repos,
				followers,
				request,
				error,
				searchGitHubUser,
				isLoading,
			}}
		>
			{children}
		</GitHubContext.Provider>
	);
};

export { GitHubContext, GitHubProvider };
