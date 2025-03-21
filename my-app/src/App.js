import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

function App() {
  const [username, setUserName] = useState("Vinni");
  return (
    <div className="App">
    <Router>
    <AppContext.Provider value={{username, setUserName}}>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Profile" element={<Profile />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/*" element={<h1> PAGE IS NOT FOUND </h1>} />
    </Routes>
    </AppContext.Provider>
    </Router>
    </div>
  );
};

export default App;