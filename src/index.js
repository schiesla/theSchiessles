import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyAHLV0LJDxFl6LKC3CI7oULqCzaPem_jBM",
  authDomain: "the-schiee-s.firebaseapp.com",
  databaseURL: "https://the-schiee-s.firebaseio.com",
  projectId: "the-schiee-s",
  storageBucket: "the-schiee-s.appspot.com",
  messagingSenderId: "162718333894",
  appId: "1:162718333894:web:737d8c3af4a8bdca8950c7"
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
