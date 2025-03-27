import axios from "axios";
import { func, string } from "prop-types";
import { useEffect, useState, useMemo, useCallback } from "react";
import Child from "./Child";
import { data } from "react-router-dom";

export default function Callback() {
    const [data, setData] =useState(false);
    const[toggle, setToggle] = useState("Yo, pls sub to the channel");
}

const returnComment = useCallback(
    (name) => {
  return data + name;  
 },
 [data]
);

return (
    <div className="App">
        <div> {getLongestName} </div>

        <button 
        onClick={() => {
            setToggle(!toggle);
        }}
        >
            (" ")
            Toggle
        </button>
        {toggle && <h1> toggle </h1>}
    </div>
);