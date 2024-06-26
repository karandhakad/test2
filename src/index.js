import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
import { liveData } from './store/Api';

const userContext = createContext();

let newObj = {
  liveData:liveData
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <userContext.Provider value={newObj}>
    <App />
  </userContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export {userContext};