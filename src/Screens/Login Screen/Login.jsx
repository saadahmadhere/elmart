import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const testLoginHandler = (e) => {
    e.preventDefault();
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };

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
          placeholder="si@senor.com"
          className="input block"
          value={email}
          onChange={emailHandler}
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
            type={showPassword ? "text" : "password"}
            id="password"
            className="input block"
            placeholder="Your password here..."
            value={password}
            onChange={passwordHandler}
            required
          />
          <button
            className="btn btn_show__password"
            onClick={showPasswordHandler}>
            <span className="material-icons outlined visibility ">
              visibility_off
            </span>
          </button>
        </div>
        <button className="btn btn_primary btn_sm txt_semibold">Login</button>
        <button
          className="btn btn_outline btn_sm mt_2"
          onClick={testLoginHandler}>
          Login with test credentials
        </button>
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
