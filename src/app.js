import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./Routes";

export default function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
