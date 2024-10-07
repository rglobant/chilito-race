import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/auth/Login";
import ProtectedRoute from "./components/alternateRoutes/ProtectedRoute";
import Dashboard from "./components/dashboard/dashboard";


import { RootState } from "./store";

import "./App.css";
import NotFound from "./components/alternateRoutes/NotFound";

function App() {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
