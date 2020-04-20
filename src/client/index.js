import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store";
//const store = configureStore()
ReactDOM.render(<App />, document.getElementById("root"));
