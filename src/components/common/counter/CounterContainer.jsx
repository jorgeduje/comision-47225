import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepito");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  // useEffect( ()=>{

  //   // PETICION A UN SERVIDOR
  // console.log("Se realizo una peticion")

  // } , [] )

  useEffect(() => {
    // PETICION A UN SERVIDOR
    console.log("Se realizo una peticion");
  }, [ nombre, contador ] ); // array de dependencias

  console.log("montaje o actualizacion");

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};

export default CounterContainer;
