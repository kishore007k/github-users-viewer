import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";

const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}
	img {
		margin-bottom: 2rem;
	}
	h1 {
		margin-bottom: 1.5rem;
	}
`;

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Wrapper>
			<div className="container">
				<img src={loginImg} alt="GitHub User" />
				<h1>GitHub User</h1>
				<button className="btn" onClick={loginWithRedirect}>
					Login / Sign Up
				</button>
			</div>
		</Wrapper>
	);
};

export default Login;
