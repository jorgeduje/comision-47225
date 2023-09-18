import { Footer } from "./Footer";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

function App() {
  let nombre = "pepito";

  const sumar = () => {
    console.log("estoy sumar");
  };

  // let estilos = {
  //   color: "red"
  // }

  return (
    <div>
      <Navbar />

      {/* el comentario */}
      <Home />

      <Footer />
    </div>
  );
}

export default App;

// App() / <App /> ---> <div>
// <h1 style={{ color: "red", fontSize: "2rem" }} >{nombre}</h1>
// <button onClick={sumar}>sumar</button>
// </div>

// const saludar = ()=>{

//   return "hola como estas"
// }

// saludar() --> "hola como estas"
