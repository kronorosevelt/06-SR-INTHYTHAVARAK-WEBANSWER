import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import {logger} from 'redux-logger'
import { rootReducer } from './redux/reducers/index';
const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
