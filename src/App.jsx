import { useState } from "react";
import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [montar, setMontar] = useState(false);

  return (
    <>
      <Navbar />
      <button onClick={() => setMontar(!montar)}>Montar/desmontar</button>

      {montar && <CounterContainer stock={20} />}
    </>
  );
}

export default App;
