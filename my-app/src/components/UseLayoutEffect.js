import { useLayoutEffect, useEffect } from "react";

function LayoutEffect() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
    <div className="App">
        <input ref={inputRef} value="VINNI" style={{ width: 400, height:400}} />
    </div>
);
}

export default LayoutEffect;