import React, { Children } from "react";
// import ReactDOM  from 'react-dom/client';
import ReactDOM from "react-dom";

const element = React.createElement("div", {
  a: 5,
  b: 10,
  children: "Привет мир",
});

console.log(element);

ReactDOM.render(element, document.querySelector("#root"));
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
