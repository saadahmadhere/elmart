import { Link } from "react-router-dom";
import { Categories } from "../../Components/";
import { Footer } from "../../Components/";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <div className="home_banner ">
        <h1
          className="h1 gray_subtitle mb_4 txt_center"
          style={{ fontSize: "4rem" }}>
          End Of Reason SALE
        </h1>
        <span className="home_offer">50% off</span>
        <Link
          to="/productListing"
          className="btn block mt_4 px_6 py_3 btn_cta txt_bold">
          Shop Now
        </Link>
      </div>
      <Categories />
      <Footer />
    </>
  );
};

export { HomeScreen };
