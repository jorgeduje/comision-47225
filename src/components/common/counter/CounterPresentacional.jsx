import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Button variant="contained" onClick={sumar}>
          sumar
        </Button>
        <h4 style={{ fontSize: "40px" }}> {contador} </h4>
        <Button variant="contained" onClick={restar}>
          restar
        </Button>
      </div>
      <Button sx={{marginTop: "20px"}} variant="contained" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </>
  );
};

export default CounterPresentacional;
