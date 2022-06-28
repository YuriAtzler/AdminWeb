import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./hooks/useAuth";
import MainRoutes from "./Routes";

export default function App() {
  return (
    <AuthProvider value={{ signed: false }}>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}
