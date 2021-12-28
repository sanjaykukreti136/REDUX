import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import { countReducer, loginReducer } from './redux/reducer';

let rootReducer = combineReducers({ count: countReducer, logged: loginReducer })


let myStore = createStore(rootReducer);
ReactDOM.render(
  <Provider store={myStore} >
    <App />
  </Provider>
  , document.getElementById('root')
);

