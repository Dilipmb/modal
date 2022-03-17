import StudentList from "./components/StudentList";
import StudentContextProvider from "./contexts/StudentContext";
import { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ViewForm from "./components/ViewForm";
import Nav from "./components/Nav";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";
function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);
  return (
    <>
      <Router>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              {/* {user.email !== "" ? (
              <div className="welcome">
                <h2>
                  we lcome, <span>{user.email}</span>
                </h2>
                <button onClick={Logout}>Logout</button>
              </div>
            ) : (
              <LoginForm Login={Login} error={error} />
            )} */}
              <Nav />
              <Routes>
                <Route path="/" exact element={Home} />
                {!auth && (
                  <Route
                    path="/login"
                    element={<LoginForm authenticate={() => setAuth(true)} />}
                  />
                )}
                {auth && (
                  <>
                    <Route
                      path="/student"
                      element={
                        <StudentContextProvider>
                          <StudentList logout={() => setAuth(false)} />
                        </StudentContextProvider>
                      }
                    />
                    <Route path="/student/:id" element={<StudentContextProvider><Profile /></StudentContextProvider>} />
                  </>
                )}
                <Route
                  path="*"
                  element={<Navigate to={auth ? "/student" : "/login"} />}
                />
                {/* <Route path="/login" exact element={<LoginForm />} /> */}
                {/* <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/student"
                    exact
                    element={
                      <StudentContextProvider>
                        <StudentList />
                      </StudentContextProvider>
                    }
                  />
                  <Route path="/students/:id " exact element={<ViewForm />} />
                </Route> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>;
};
export default App;
