import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Data/store';

const RouterToApp = (
  <BrowserRouter>
      <Route path="/" component={App}/>
  </BrowserRouter>
);

ReactDOM.render(

  <Provider store={ store }>
      {RouterToApp}
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
