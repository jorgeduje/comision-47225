import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Button } from "@mui/material";
import { products } from "../../../productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const rellenarDB = ()=>{

  //   const prodCollection = collection( db, "products" )

  //   products.forEach( (elemento)=>{
  //       addDoc(prodCollection, elemento)
  //   } )

  // }

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      // SI NO EXISTE CATEGORYNAME ---> todos mis productos
      consulta = productsCollection;
    } else {
      // SI EXISTE CATEGORYNAME ---> parte de mis productos
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      // let arrayFiltrado = newArray.filter((elemento)=> elemento.stock > 0)

      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {/* <Button variant="contained" onClick={rellenarDB}>Rellenar</Button> */}
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
