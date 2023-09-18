import "./Navbar.css";
import logo from "./assets/images/descarga.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img
        src={logo}
        alt="logo"
      /> */}
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1695049071/descarga_brmzvx.jpg"
        alt=""
      />
      <ul>
        <li>productos</li>
        <li>contacto</li>
        <li>inicio</li>
      </ul>
    </nav>
  );
};
