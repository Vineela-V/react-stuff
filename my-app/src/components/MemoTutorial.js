import axios from "axios";
import { func, string } from "prop-types";
import { useEffect, useState, useMemo } from "react";
import { useFetcher } from "react-router-dom";

export default function MemoTutorial() {
    const [data, setData] =useState(null);
    const[toggle, setToggle] = useState("false");
}

useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
    }, []);

    const findLongestName = (comments) => {
    if (!comments) return null;

    let LongestName ="";
    for (let i =0; i < comments.length; i++) {
        let currentName = comments[i].name;
        if(currentName.length > LongestName.length) {
            LongestName = currentName;
        }
    }

    console.log("THIS WAS COMPUTED");

    return LongestName;
};

const getLongestName = useMemo(() => findLongestName(data), [data]);
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
