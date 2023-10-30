import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";
import CheckoutOficial from "../components/pages/checkoutOficial/CheckoutOficial";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/" ,
        Element: ItemListContainer  ,
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element : ItemListContainer 
    },
    {
        id: "cart",
        path: "/cart",
        Element : Cart
    },
    {
        id: "detalle",
        path: "/itemDetail/:id",
        Element : ItemDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element : CheckoutOficial
    },
   
]


