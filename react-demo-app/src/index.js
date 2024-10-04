import React from "react";
import ReactDOM from "react-dom/client"; // For React 18 and above
import "./index.css"; // Your global styles
import App from "./App"; // Main App component
import reportWebVitals from "./reportWebVitals"; // Performance measuring

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
// You can log results or send them to an analytics endpoint
reportWebVitals();
