import React, { useState } from "react";
import { usePasswordValidation } from "../helpers/helpers";
import { Link } from "react-router-dom";
import "../App"
import auth from "./auth";
import "../index.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
const LoginForm = ({ authenticate }) => {
  // const adminUser = {
  //   email: "rohith@admin.com",
  //   password: "RohithS@123",
  // };
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  // const Login = (details) => {
  //   console.log(details);
  //   if (
  //     details.email === adminUser.email &&
  //     details.password === adminUser.password
  //   ) {
  //     console.log("Logged in");
  //     setUser({
  //       email: details.email,
  //     });
  //     auth.login(() => {
  //       props.history.push("/StudentList");
  //     });
  //   } else {
  //     console.log("Details do not match!");
  //     setError("Details do not match!");
  //   }
  // };

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({ email: "" });
  //   auth.logout(() => {
  //     props.history.push("/");
  //   });
  // };
  const [details, setDetails] = useState({ email: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(true);
  const submitHandler = (props) => {
    props.history.push("/student");
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [validLength, hasNumber, upperCase, lowerCase, specialChar] =
    usePasswordValidation({
      password: details.password,
    });
  const onClick = () => {
    authenticate();
    navigate("/student");
  };
  return (
    <form>
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
        <button onClick={onClick}>
          <input className="btn btn-info my-1 " type="submit" value="Login" />
        </button>
        <div>
          <table className="center">
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
};

export default LoginForm;
