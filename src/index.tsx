import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, Store } from 'redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store:Store<userState,userAction>& {dispatch:DispatchType} = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
