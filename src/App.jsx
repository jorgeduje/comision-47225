import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Padre>
  <Login /> 
  <Registro /> 
</Padre>

const Padre = ( {children} )=> {
return <>
  {children}
</>
} */
}
