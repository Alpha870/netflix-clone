import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Paypal from "./Pages/Paypal/Paypal";
import Profile from "./Pages/Profile/Profile";

function App() {
  const user = null;
  return (
    <div className="root">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Paypal />} />
            </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
