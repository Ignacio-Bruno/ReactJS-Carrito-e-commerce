import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX12jxuKyw0SC2ufBuaGZAfjtExYIL6cQ",
  authDomain: "coderhouse-ecommerce-792dc.firebaseapp.com",
  projectId: "coderhouse-ecommerce-792dc",
  storageBucket: "coderhouse-ecommerce-792dc.appspot.com",
  messagingSenderId: "649527715062",
  appId: "1:649527715062:web:feee3b08946ed14bdc78d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
