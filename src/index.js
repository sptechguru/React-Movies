import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { store } from './Redux_features/Containers/ReduxToolKit/Movies/MoviesStore';
import storeRoot from './Redux_features/Containers/storeRoot';
import { Auth0Provider } from '@auth0/auth0-react';
storeRoot.subscribe(() => {
  //console.log(storeRoot.gestate());   // get provider values 
})
ReactDOM.render(
  <Auth0Provider
  domain="dev-0yz4j5k7uppqtjdw.us.auth0.com"
  clientId="1YxWKtbidaBtOZC1OQhGvlIHNNkL8iS3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={storeRoot}>
      <App />
    </Provider>
  </Auth0Provider>

  , document.getElementById('root')

);

reportWebVitals();
