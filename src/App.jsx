
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  
  let saludo = "Hola pepito como estas"

  return (
    <div>
      <Navbar />
     
      <ItemListContainer saludo={saludo} edad={12} />
    </div>
  );
}

export default App;

