import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="login flex_col flex_align__center">
      <h1 className="h2 gray_title">Login</h1>
      <form className="flex_col">
        <label className="label field_required gray_title" htmlFor="email_id">
          Email address
        </label>
        <input
          id="email_id"
          type="email"
          placeholder="abc@example.com"
          className="input block"
          required
        />
        <div className="login_pwd">
          <label
            htmlFor="password"
            className="label gray_title field_required"
            required>
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input block"
            placeholder="Your password here..."
            required
          />
          <a className="btn_icon btn_show__password">
            <span className="material-icons outlined visibility ">
              visibility_off
            </span>
          </a>
        </div>
        <div className="remember_me">
          <input type="checkbox" id="check_box" />
          <label htmlFor="check_box">Remember me</label>
        </div>
        <button className="btn btn_primary btn_sm txt_semibold">Login</button>
        <a className="txt_sm forgot_pwd">Forgotten Password?</a>
        <hr className="hr" />
        <Link to="/signUp" className="btn btn_create__acc btn_sm txt_semibold">
          Create New Account
        </Link>
      </form>
    </main>
  );
};

export { Login };
