import React, { useState } from "react";
import { usePasswordValidation } from "../helpers/helper";
import { Link } from "react-router-dom";

function LoginForm() {
    const adminUser = {
      email: "rohith@admin.com",
      password: "RohithS@123",
    };

    const [user, setUser] = useState({ email: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
      console.log(details);
      if (
        details.email === adminUser.email &&
        details.password === adminUser.password
      ) {
        console.log("Logged in");
        setUser({
          email: details.email,
        });
        
      } else {
        console.log("Details do not match!");
        setError("Details do not match!");
      }
    };

    const Logout = () => {
      console.log("Logout");
      setUser({ email: "" });
    };
  const [details, setDetails] = useState({ email: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [validLength, hasNumber, upperCase, lowerCase, specialChar] =
    usePasswordValidation({
      password: details.password,
    });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })} //this line??
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            //ref={register({ required: "This is required." })}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <i onClick={togglePasswordVisiblity}>
            <span className="material-icons">remove_red_eye</span>
          </i>
        </div>
        <input type="submit" value="Login" />
        <div>
          <table class="center">
            <tr>
              <td>
                Length: {validLength ? <span>Done</span> : <span>False</span>}
              </td>
            </tr>
            <tr>
              <td>
                Number: {hasNumber ? <span>Done</span> : <span>False</span>}
              </td>
            </tr>
            <tr>
              <td>
                UpperCase: {upperCase ? <span>Done</span> : <span>False</span>}
              </td>
            </tr>
            <tr>
              <td>
                LowerCase: {lowerCase ? <span>Done</span> : <span>False</span>}
              </td>
            </tr>
            <tr>
              <td>
                Special Character:{" "}
                {specialChar ? <span>Done</span> : <span>False</span>}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;