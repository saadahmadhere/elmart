import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="signUp flex_col flex_align__center">
      <h1 className="h1 gray_title">Sign Up</h1>
      <form className="flex_col">
        <label htmlFor="fName" className="label gray_title field_required">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          className="input block"
          placeholder="John"
          autoFocus
          required
        />
        <label htmlFor="lName" className="label gray_title field_required">
          Last Name
        </label>
        <input
          type="text"
          id="lName"
          className="input block"
          placeholder="Wick"
          required
        />
        <label htmlFor="email" className="label gray_title field_required">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="john.wick@motocyles.com"
          className="input block"
          required
        />
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
        <label
          htmlFor="confirmPassword"
          className="label gray_title field_required">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="input block"
          placeholder="Confirm password"
          required
        />
        <div className="input_container">
          <input type="checkbox" id="check_box" required />
          <label htmlFor="check_box" className="label field_required">
            I agree to the terms of service.
          </label>
        </div>
        <button className="btn btn_primary btn_sm">Signup</button>
        <Link to="/login" className="txt_regular">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export { SignUp };
