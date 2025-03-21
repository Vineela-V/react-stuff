import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;