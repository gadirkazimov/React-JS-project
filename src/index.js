import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "../src/app"
import '../src/css/main.css'



const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />);
