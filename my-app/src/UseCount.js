import { useState } from "react";

export const useCount = (initialval =0) => {
    const [count, setCount] = useState(initialval);

    const increase = () => {
        setCount ((prev) => prev +1);
    };

    const decrease = () => {
        setCount ((prev) => prev -1);
    };

    const restart = () => {
        setCount(0);
    };

    return { count, increase, decrease, restart }
};