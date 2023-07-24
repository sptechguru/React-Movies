import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { store } from './Redux_features/Containers/ReduxToolKit/Movies/MoviesStore';
import storeRoot from './Redux_features/Containers/storeRoot';
storeRoot.subscribe(()=>{
 //console.log(storeRoot.gestate());   // get provider values 
})

ReactDOM.render(
  <Provider store ={storeRoot}>
   <App />
   </Provider>
  ,document.getElementById('root')
);

reportWebVitals();
