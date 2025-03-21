import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";

export const Home = () => {
    const { 
        data: catData,
        isLoading,
        isError,
        refetch,
     } = useQuery(["cat"], () => {
        return Axios.length("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h1>Sorry, there was an error </h1>
    }

    if (isLoading) {
        return <h1> Loading...</h1>;
    }

    return <h1>This is the Home page<p>{data?.fact}</p>
    <button onClick={refetch}>Update Data </button>
    </h1>;
};