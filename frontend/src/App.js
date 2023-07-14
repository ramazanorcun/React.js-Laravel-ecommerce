import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MainPage from "./Pages/MainPage";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import { useState } from "react";
import AdminPage from "./Pages/AdminPage";
import UserProfil from "./Pages/UserProfil";
// import { useSelector } from "react-redux";
import Product from "./Pages/Product";

function App() {
  // const isAuthenticated = useSelector((state) => state.auth);
  // console.log(isAuthenticated);
  const [loginFlag, setLoginFlag] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header loginFlag={loginFlag} setLoginFlag={setLoginFlag} />

        <Routes>
          <Route
            path={"/"}
            element={
              <Login loginFlag={loginFlag} setLoginFlag={setLoginFlag} />
            }
          />
          <Route path={"/Register"} element={<Register />} />
          <Route path={"/Product"} element={<Product />} />
          <Route path={"/MainPage"} element={<MainPage />} />
          <Route path={"/AdminPage"} element={<AdminPage />} />
          <Route path={"/UserProfil"} element={<UserProfil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
