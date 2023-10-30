import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import {Link } from "react-router-dom";

export const Navbar = () => {
  let categories = [
    {
      id: 1,
      name: "Todas",
      path: "/",
    },
    {
      id: 2,
      name: "Urbanas",
      path: "/category/urbanas",
    },
    {
      id: 3,
      name: "Deportivas",
      path: "/category/deportivas",
    },
  ];

  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>Comision 47225</h4>
        </Link>
        <ul className="categories">
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
