import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { JopsContextProvider } from "./context/JopContext"; // Corrected import statement
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JopsContextProvider>
        <App />
      </JopsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
