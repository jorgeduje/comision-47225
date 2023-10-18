import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock, onAdd, initial=1 }) => {
  const [contador, setContador] = useState( initial );

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

  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
};

export default CounterContainer;
