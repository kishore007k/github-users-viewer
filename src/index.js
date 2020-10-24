import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

export default App;
