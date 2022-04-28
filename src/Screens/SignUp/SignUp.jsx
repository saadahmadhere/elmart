import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, signup } from "../../Helper";

const SignUp = () => {
  const navigate = useNavigate();
  const { dispatchUserState } = useAuth();
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const { email, firstName, lastName, password } = signupDetails;
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const signupSumbitHandler = (e) => {
    e.preventDefault();
    if (signupDetails.password !== signupDetails.confirmPassword) {
      setError("Passwords do not match");
    } else {
      signup(
        email,
        password,
        firstName,
        lastName,
        dispatchUserState,
        navigate,
        setError
      );
    }
  };
  return (
    <main className="signUp flex_col flex_align__center">
      <h1 className="h1 gray_title">Sign Up</h1>
      <form className="flex_col" onSubmit={signupSumbitHandler}>
        <label htmlFor="fName" className="label gray_title field_required">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          className="input block"
          placeholder="John"
          value={signupDetails.firstName}
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, firstName: e.target.value })
          }
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
          value={signupDetails.lastName}
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, lastName: e.target.value })
          }
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
          value={signupDetails.email}
          onChange={(e) =>
            setSignupDetails({ ...signupDetails, email: e.target.value })
          }
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
            value={signupDetails.password}
            onChange={(e) => {
              setError("");
              setSignupDetails({ ...signupDetails, password: e.target.value });
            }}
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
          value={signupDetails.confirmPassword}
          onChange={(e) => {
            setError("");
            setSignupDetails({
              ...signupDetails,
              confirmPassword: e.target.value,
            });
          }}
          required
        />
        <div className="input_container">
          <input type="checkbox" id="check_box" required />
          <label htmlFor="check_box" className="label field_required">
            I agree to the terms of service.
          </label>
        </div>
        {error && (
          <div style={{ color: "red" }} className="mb_2">
            <i className="fas fa-info-circle mx_1"></i>
            {error}
          </div>
        )}
        <button className="btn btn_primary btn_sm" type="submit">
          Signup
        </button>
        <Link to="/login" className="txt_regular">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export { SignUp };
