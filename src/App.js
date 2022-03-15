import StudentList from "./components/StudentList";
import StudentContextProvider from "./contexts/StudentContext";
import { useState } from "react";

import LoginForm from "./components/LoginForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewStudent from "./components/viewStudent";
import Nav from "./components/Nav";

function App() {
  return (
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
              <Route path="/login" exact element={<LoginForm />} />
              <Route
                path="/student"
                exact
                element={<StudentList/>}
              />
              <Route path="/students/:id " exact element={<ViewStudent />} />
            </Routes>
            {/* <StudentContextProvider>
              <StudentList />
            </StudentContextProvider> */}
          </div>
        </div>
      </div>
    </Router>
  );
}
const Home = () => {
  <div>
    
      <h1>Home Page</h1>
   
  </div>;
};
export default App;