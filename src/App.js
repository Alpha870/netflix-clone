
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Paypal from "./Pages/Paypal/Paypal";
import Profile from "./Pages/Profile/Profile";

import appFirebase from "./firebase";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(appFirebase)

function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase){
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })


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
              <Route path="/login" element={<Login />} />
            </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
