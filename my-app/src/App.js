import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import { Profile } from "./pages/Profile";
import {Contact} from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

const App = () => {
  const [username, setUserName] = useState("Vineela");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUserName}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/*" element={<h1>PAGE NOT FOUND</h1> }/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
