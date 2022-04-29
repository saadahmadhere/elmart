import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useFixSidebarOverflow, useAuth } from "../../Helper";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSideNav, setShowSideNav] = useState(false);
  const {
    userState,
    dispatchUserState,
    userState: {
      userData: { cart },
    },
    userState: {
      userData: { wishlist },
    },
  } = useAuth();
  useFixSidebarOverflow(showSideNav);

  const logoutHandler = () => {
    dispatchUserState({ type: "LOGOUT" });
    navigate("/");
  };

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
            {userState.token ? (
              <button
                className="btn btn_outline btn_logout btn_sm"
                onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn_primary btn_sm">
                Login
              </Link>
            )}
          </li>
          {!userState.token && (
            <li>
              <Link to="/signUp" className="btn btn_outline btn_logout btn_sm">
                Signup
              </Link>
            </li>
          )}

          <li>
            <div className="icon_badge">
              <Link to="/wishlist" className="btn">
                <span className="material-icons outlined">favorite</span>
                <div className="badge badge_red badge_wishlist">
                  {wishlist ? wishlist.length : "0"}
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="icon_badge">
              <Link to="/cart" className="btn">
                <span className="material-icons outlined">shopping_cart</span>
                <div className="badge badge_red md">
                  {cart ? cart.length : "0"}
                </div>
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
          {userState.token && (
            <div className="mr_3 mt_3 txt_semibold">
              Hi, {JSON.parse(localStorage.getItem("userState")).firstName}
            </div>
          )}
        </div>
        <ul className="list_style_none mt_3">
          <li
            className="mb_4 txt_semibold"
            onClick={() => {
              setShowSideNav(false);
            }}>
            {userState.token ? (
              <button className="btn" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {!userState.token && (
            <li
              className="mb_4 txt_semibold"
              onClick={() => {
                setShowSideNav(false);
              }}>
              <Link to="/signUp">Signup</Link>
            </li>
          )}

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
