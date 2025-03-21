import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./UseCount";

function App() {
  const { count, increase, decrease, restart } = useCount(900);
  return (
    <div className="App">
      {count}
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
      <button onClick={restart}> restart </button>
    </div>
  );
}

export default App;