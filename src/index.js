import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import config from "./config.json";


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
    domain={config.AUTH0_DOMAIN}
    clientId={config.AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);