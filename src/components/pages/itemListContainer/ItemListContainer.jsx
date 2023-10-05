import axios from "axios";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged, setIsChange] = useState(false);

  // READ
  useEffect(() => {
    setIsChange(false);
    const getData = axios.get("http://localhost:5000/products");
    getData.then((res) => setItems(res.data)).catch((err) => console.log(err));
  }, [isChanged]);

  let obj = {
    title: "Nueva",
    price: 2000,
    stock: 3,
    description: "Estas son nuevas",
    category: "deportivas",
    img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
  };

  // CREATE
  const crearNuevo = () => {
    axios
      .post("http://localhost:5000/products", obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setIsChange(true);
  };

  // DELETE
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChange(true);
  };

  // // UPDATE
  // let obj2 = {
  //   title: "Zapatilla modificada",
  //   price: 14500,
  //   stock: 5,
  //   description: "Ultra livianas y cuentan con camara de aire",
  //   category: "deportivas",
  //   img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669430010/foc364fsakkzmausrovn.jpg",
  // };

  // const modificar = (id) => {
  //   axios.put(`http://localhost:5000/products/${id}`, obj2);
  // };

  // PATCH ---> por partes
  let obj2 = {
    title: "Zapatilla PATCH",
  };

  const modificar = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, obj2);
    setIsChange(true);
  };

  return (
    <ItemList
      items={items}
      crearNuevo={crearNuevo}
      deleteProduct={deleteProduct}
      modificar={modificar}
    />
  );
};

export default ItemListContainer;
