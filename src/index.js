import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayerProvider } from "./store/dataLayer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayerProvider>
      <App />
    </DataLayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
