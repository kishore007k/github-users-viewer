import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GitHubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain: kishore007k.us.auth0.com
// ClientID: Pdnd6EjfrI0X7Lza48CPpFq40yaJCjpP

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="kishore007k.us.auth0.com"
			clientId="Pdnd6EjfrI0X7Lza48CPpFq40yaJCjpP"
			redirectUri={window.location.origin}
			cacheLocation="localstorage"
		>
			<GitHubProvider>
				<App />
			</GitHubProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
