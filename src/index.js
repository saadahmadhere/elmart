import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ProductDataProvider,
  FilterContextProvider,
  AuthProvider,
} from "./Helper";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <FilterContextProvider>
          <ProductDataProvider>
            <App />
          </ProductDataProvider>
        </FilterContextProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
