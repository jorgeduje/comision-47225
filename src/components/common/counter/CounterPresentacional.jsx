import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
    
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button variant="contained" onClick={restar}>
          -
        </Button>
        <h2>{contador}</h2>
        <Button variant="contained" onClick={sumar}>
          +
        </Button>

        <Button variant="contained" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default CounterPresentacional;
