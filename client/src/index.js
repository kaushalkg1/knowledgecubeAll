import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
  /* wrap the app in provider and set store ={store} now App is connected to redux. 
  we have to dispatch getpost action using useDispatch hook in App.js file */
root.render(
  <React.StrictMode>
 
  <Provider store={store.store}>
  <App />
  </Provider> 
  </React.StrictMode>
);

