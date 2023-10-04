import { useState } from "react";
import { useEffect } from "react";
import Albums from "./Albums";
import axios from "axios";


const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // const tarea = fetch("https://jsonplaceholder.typicode.com/albums");

    // tarea
    //   .then((res) => res.json())
    //   .then((res) => setAlbums(res))
    //   .catch((err) => console.log(err));

    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums")
    tarea.then((res) => setAlbums(res.data)).catch((err) => console.log(err));

  }, []);


  const crear = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/15", {
    //   method: "PUT",
    //   body: JSON.stringify( {
    //     userId: 2,
    //     title: "Album modificado",
    //   }),
    //   // headers: {
    //   //   "authorization": "Dsadsag123213dsadasd"
    //   // }
    // });
    axios.post("https://jsonplaceholder.typicode.com/albums" , {
          userId: 2,
          title: "Album modificado",
        } )
  };

  return <Albums albums={albums} crear={crear} />;
};

export default FetchingData;
