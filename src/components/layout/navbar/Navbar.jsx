import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>Comision 47225</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          <Link to="/category/urbanas">
            <li>Urbanas</li>
          </Link>
          <Link to="/category/deportivas">
            <li>Deportivas</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
  
    </>
  );
};
