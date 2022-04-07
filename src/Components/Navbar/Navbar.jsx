import { Link } from "react-router-dom";
import "./Navbar.css";
import { useData, useFixSidebarOverflow } from "../../Helper";
import { useState } from "react";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  useFixSidebarOverflow(showSideNav);
  const {
    state: { cart, wishlist },
  } = useData();

  return (
    <>
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
            <Link to="/login" className="btn btn_primary btn_sm">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signUp" className="btn btn_outline btn_logout btn_sm">
              Signup
            </Link>
          </li>

          <li>
            <div className="icon_badge">
              <Link to="/wishlist" className="btn">
                <span className="material-icons outlined">favorite</span>
                <div className="badge badge_red badge_wishlist">
                  {wishlist.length}
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="icon_badge">
              <Link to="/cart" className="btn">
                <span className="material-icons outlined">shopping_cart</span>
                <div className="badge badge_red md">{cart.length}</div>
              </Link>
            </div>
          </li>
        </ul>
        <div
          className="navbar_burger flex"
          onClick={() => setShowSideNav(true)}>
          <span className="material-icons outlined">menu</span>
        </div>
      </nav>
      <div
        className={`sidebar_nav ${
          showSideNav ? "showSideNav" : "hideSideNav"
        }`}>
        <div className="flex sidenav_userDetail">
          <div
            onClick={() => {
              setShowSideNav(false);
            }}>
            <span className="material-icons outlined ml_3 mt_3 txt_bold">
              close
            </span>
          </div>
          <div className="mr_3 mt_3 txt_semibold">Hi, User</div>
        </div>
        <ul className="list_style_none mt_3">
          <li
            className="mb_4 txt_semibold"
            onClick={() => {
              setShowSideNav(false);
            }}>
            <Link to="/login">Login</Link>
          </li>
          <li
            className="mb_4 txt_semibold"
            onClick={() => {
              setShowSideNav(false);
            }}>
            <Link to="/signUp">Signup</Link>
          </li>
          <li
            className="mb_4 txt_semibold"
            onClick={() => {
              setShowSideNav(false);
            }}>
            <Link to="/cart">My Cart</Link>
          </li>
          <li
            className="mb_4 txt_semibold"
            onClick={() => {
              setShowSideNav(false);
            }}>
            <Link to="/wishList">My Wishlist</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Navbar };
