import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Estoy en el carrito</h1>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
