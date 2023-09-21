// EXPORTACION NOMBRA

import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0); // [ variable, funcion ]
  const [darkMode, setDarkMode] = useState(false);

console.log("hola")
  const switchMode = () => {
    setDarkMode( !darkMode )
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={switchMode}>Cambiar modo</button>
    </div>
  );
};

// EXPORTACION POR DEFECTO

// const Home = ()=>{
//     return <h1>Estoy en el home</h1>
// }

// export default Home
