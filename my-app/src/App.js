import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Greet from '/.components/Greet'
import Welcome from './componets/Welcome'
import Hello from './componets/Hello'
import Message from './componets/Message'
import Counter from './componets/Counter'
import { Component } from "react";
import FunctionClick from "./componets/FunctionClick";
import ClassClick from "./componets/ClassClick";

class App extends Component {
  render() {
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="RRR" heroname="R">
      <p>This is Children props</p>
      </Grret>
      <Greet name="KGF" heroname="Y">
      <button>Action</button>
      </Greet>
      /> */}
    </div>
  }
}

export default App;