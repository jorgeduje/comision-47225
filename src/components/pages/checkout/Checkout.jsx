import { useState } from "react";

const Checkout = () => {
  //    const [ nombre, setNombre ] = useState("")
  //    const [ apellido, setApellido ] = useState("")
  //    const [ email, setEmail ] = useState("")

  //   const capturarNombre = (e) => {
  //     setUserInfo( { ...userInfo, nombre: e.target.value  } )
  //   };

  //   const capturarApellido = (e) => {
  //     setUserInfo( { ...userInfo, apellido: e.target.value  } )

  //   };

  //   const capturarEmail = (e) => {
  //     setUserInfo( { ...userInfo, email: e.target.value  } )

  //   };
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ACA IRIA TODO LO QUE QUIERAN HACER
    // axios.post( "http-----", {nombre, apellido, email})
    // nombre ---> 5 caracteres
    // if (userInfo.nombre.length < 5 || !userInfo.email.includes("@")) {

    //   if (userInfo.nombre.length < 5) {
    //     console.log("entrooo")
    //     setErrors({
    //       ...errors,
    //       nombre: "El nombre debe tener al menos 5 caracteres"
    //     })
    //   }

    //   if (!userInfo.email.includes("@")) {
    //     setErrors({ ...errors, email: "No corresponde a un email valido" });
    //   }

    //   return;
    // }

    console.log(userInfo);
  };

  console.log(errors)

  return (
    <div>
      <h1>Estoy en el checkout</h1>

      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="nombre" onChange={ (e)=>setNombre(e.target.value) }  /> */}

        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.nombre}
        </span>
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          placeholder="Apellido"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.apellido}
        </span>

        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.email}
        </span>

        <button>Enviar</button>
        <button type="button" onClick={()=>console.log("se cancelo")}>Cancelar</button>
      </form>

      {/* <button onClick={}></button> */}
    </div>
  );
};

export default Checkout;

// let persona = {
//     nombre: "pepe",
//     edad: 22
// }

// // console.log( persona.nombre )
// // console.log( persona["nombre"] )

// const mostrarPropiedad = (prop)=>{
//     console.log( persona[prop] )
// }

// mostrarPropiedad("edad")
