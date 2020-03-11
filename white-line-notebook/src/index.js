import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyDp6gTzKdAimEGnBuvs2_rZ0jqafu2WIdk",
    authDomain: "white-line-notebook.firebaseapp.com",
    databaseURL: "https://white-line-notebook.firebaseio.com",
    projectId: "white-line-notebook",
    storageBucket: "white-line-notebook.appspot.com",
    messagingSenderId: "641470090026",
    appId: "1:641470090026:web:b4184cba5e087859e12c53",
    measurementId: "G-0C52F2LHPX"
  });
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('white-line-notebook'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
