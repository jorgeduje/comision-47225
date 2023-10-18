import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]); // [todo lo que tenia, y ademas lo nuevo]

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArr = cart.map((elemento) => {
        // []
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id)=>{
    let product = cart.find( elemento => elemento.id === id)
    return product?.quantity
  }

  // limpiar el carrito 

  const clearCart = ()=> {
    setCart( [] )
  }
  
  // obtener el total del carrito 
  // poder borrar un elemento particular del carrito 
  // obtener la cantidad de elementos 

  let data = { cart, addToCart, getQuantityById, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
