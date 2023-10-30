import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let productsCollection = collection( db , "products" )

    let consulta = undefined

    if (!categoryName) {
      // SI NO EXISTE CATEGORYNAME ---> todos mis productos
      consulta = productsCollection
    } else {
      // SI EXISTE CATEGORYNAME ---> parte de mis productos
      consulta = query( productsCollection, where( "category" , "==" , categoryName  ))
    }

    getDocs(consulta).then( res => {
      let newArray = res.docs.map( product => {
        return {...product.data(), id: product.id}
      })
      setItems(newArray)
    })


  }, [categoryName]);

  return (
    <>
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
