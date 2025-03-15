import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [catfact, setCatFact] = useState("");
     
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);
  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p>{ catfact }</p>
    </div>
  );
}

export default App
