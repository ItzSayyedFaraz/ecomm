
import "./App.css";

import { Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
