import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Comision 47225</h4>
      <ul className="categories">
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
