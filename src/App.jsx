// importacion por defecto
// import EsteEsElHome from "./components/pages/home/Home"

import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

function App() {
  
  let saludo = "Hola pepito como estas"

  return (
    <div>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} edad={12} />
    </div>
  );
}

export default App;


// const sumar = (a, b)=>{
//   return a + b
// }

// <Sumar a={12} b={1}/>