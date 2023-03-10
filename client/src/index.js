import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yfnh5rsri6uihrxp.us.auth0.com"
      clientId="ppL337UqU34iwSTYaLwObXpXm9hRwdFs"
      authorizationParams={{ redirect_uri: "https://18.205.66.92" }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
