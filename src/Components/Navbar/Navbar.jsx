import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <div className="logo">
        <Link to="/">
          <div className=" logo_text txt_boldest">elmart</div>
        </Link>
      </div>
      <div className="navbar_search flex">
        <input
          className="search_box"
          type="search"
          placeholder="Search for products here"
        />
        <button className="btn">
          <span className="material-icons outlined">search</span>
        </button>
      </div>
      <ul className="navbar_links flex list_style_none">
        <li>
          <Link to="/login" className="btn btn_primary btn_logout btn_sm">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="btn btn_outline btn_logout btn_sm">
            Signup
          </Link>
        </li>

        <li>
          <div className="icon_badge">
            <Link to="/wishlist" className="btn">
              <span className="material-icons outlined">favorite</span>
              <div className="badge badge_red badge_wishlist">6</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="icon_badge">
            <Link to="/cart" className="btn">
              <span className="material-icons outlined">shopping_cart</span>
              <div className="badge badge_red md">2</div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="navbar_burger flex">
        <span className="material-icons outlined">menu</span>
      </div>
    </nav>
  );
};

export { Navbar };
