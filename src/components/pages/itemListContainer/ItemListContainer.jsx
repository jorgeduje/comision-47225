import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const tarea2 = fetch("api")
    // tarea2.then().catch()
    
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("algo salio mal")
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return <ItemList items={items}  />;
};

export default ItemListContainer;
