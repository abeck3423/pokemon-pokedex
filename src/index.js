import React from "react";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);