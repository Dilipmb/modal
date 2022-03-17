class Auth {
  constructor() {
    this.authenticated = false;
  }

  login1(cb) {
    this.authenticated = true;
    cb();
  }

  logout1(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
export default Auth;
// import React, {useState} from "react";
// function Auth(props) {
//      const adminUser = {
//     email: "rohith@admin.com",
//     password: "RohithS@123",
//   };
//  let authenticated = false
//   const [user, setUser] = useState({ email: "" });
//   const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log(details);
//     if (
//       details.email === adminUser.email &&
//       details.password === adminUser.password
//     ) {
//       console.log("Logged in");
//       setUser({
//         email: details.email,
//       });
//       authenticated =true
//     } else {
//       console.log("Details do not match!");
//       setError("Details do not match!");
//     }
//   };

// //   const Logout = () => {
// //     console.log("Logout");
// //     setUser({ email: "" });
// //     auth.logout(() => {
// //       props.history.push("/");
// //     });
// //   };
//     return ( authenticated );
// }

// export default Auth;
