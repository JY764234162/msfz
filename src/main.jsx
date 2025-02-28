import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { v4 as uuidv4 } from "uuid";
import App from "./App";
import "./main.css";
window.uuid = uuidv4();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
