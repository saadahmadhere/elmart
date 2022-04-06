import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductDataProvider, FilterContextProvider } from "./Helper";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterContextProvider>
        <ProductDataProvider>
          <App />
        </ProductDataProvider>
      </FilterContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
