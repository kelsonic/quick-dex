// Node modules.
import React from "react";
import ReactDOM from "react-dom/client";
// Relative imports.
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

// Derive the root element.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render it.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
