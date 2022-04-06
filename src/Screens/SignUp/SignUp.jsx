import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main class="signUp flex_col flex_align__center">
      <h1 class="h1 gray_title">Sign Up</h1>
      <form class="flex_col">
        <label for="fName" class="label gray_title field_required">
          First Name
        </label>
        <input
          type="text"
          id="fName"
          class="input block"
          placeholder="John"
          autofocus
          required
        />
        <label for="lName" class="label gray_title field_required">
          Last Name
        </label>
        <input
          type="text"
          id="lName"
          class="input block"
          placeholder="Wick"
          required
        />
        <label for="email" class="label gray_title field_required">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="john.wick@motocyles.com"
          class="input block"
          required
        />
        <label for="password" class="label gray_title field_required" required>
          Password
        </label>
        <input
          type="password"
          id="password"
          class="input block"
          placeholder="Your password here..."
          required
        />
        <label for="confirmPassword" class="label gray_title field_required">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          class="input block"
          placeholder="Confirm password"
          required
        />
        <div class="input_container">
          <input type="checkbox" id="check_box" required />
          <label for="check_box" class="label field_required">
            I agree to the terms of service.
          </label>
        </div>
        <button class="btn btn_primary btn_sm">Signup</button>
        <Link to="/login" class="txt_regular">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export { SignUp };
