import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export function Navbar({ onClickTab = () => {} }) {
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <div className="mainname">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="switches">
        <div className="home">
          <NavLink exact to="/home">
            <button onClick={() => onClickTab("product")} activeClassName="active">
              HOME
            </button>
          </NavLink>
        </div>
        <div className="products">
          <NavLink to="/product">
            <button
              onClick={() => onClickTab("product")}
              activeClassName="active"
            >
              PRODUCT
            </button>
          </NavLink>
        </div>
        <div className="about">
          <NavLink to="/about">
            <button onClick={() => onClickTab("about")} activeClassName="active">
              ABOUT
            </button>
          </NavLink>
        </div>
        <div className="services">
      <NavLink to="/cart">
        <button onClick={() => onClickTab("cart")} activeClassName="active">
          <i className="bi bi-bag"></i>
          {cartCount > 0 && 
            <div className="cartCount_Navbar">
              {cartCount}
            </div>
          }
        </button>
      </NavLink>
    </div>
      </div>
    </div>
  );
}
