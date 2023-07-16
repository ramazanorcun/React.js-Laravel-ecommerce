/* eslint-disable eqeqeq */
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "../Css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../Slice/AuthSlice";


function Header() {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    // Çıkış yap

    dispatch(logout())
      .then(() => {
        Navigate("/");
      })
      .catch();
  };

  return (
    <div>
      {userData ? 
        <div className="header">
        <h2 href="#default" className="logo">
          Company Logo
        </h2>
      
        <div className="navigation">
          <a className="active" href="#home">
            Home<span></span>
          </a>
          <a href="#services">
            Services<span></span>
          </a>
          <a href="#contact">
            Contact<span></span>
          </a>
          <a href="#about">
            About<span></span>
          </a>
        </div>
        {userData ? (
          <Dropdown as={ButtonGroup}>
            <Button variant="success">
              <div className="user mr-4">
                <FontAwesomeIcon icon={faUser} /> {userData.name}
              </div>
            </Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu className="dropdown_menü">
              {userData.user_level == "0" && (
                <Dropdown.Item className="dropİtem" href="/AdminPage">
                  Admin Panel
                </Dropdown.Item>
              )}
              {userData.user_level == "0" && (
                <Dropdown.Item className="dropİtem" href="/MainPage">
                  Main Page
                </Dropdown.Item>
              )}
              {userData.user_level == "0" && (
                <Dropdown.Item className="dropİtem" href="/Product">
                  Product Page
                </Dropdown.Item>
              )}
              {userData.user_level == "2" && (
                <Dropdown.Item className="dropİtem" href="/UserProfil">
                  Kullanıcı Bilgilerim
                </Dropdown.Item>
              )}

              <Dropdown.Divider />
              <Dropdown.Item
                className="dropİtem"
                href="/"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faRightFromBracket} bounce />
                 Çıkış Yap
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Dropdown as={ButtonGroup}>
            <Button variant="success">
              <div className="user mr-4">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </Button>
          </Dropdown>
        )}
        <div className="sepet">
          <FontAwesomeIcon icon={faCartShopping} />
          <span>Sepetim</span>
        </div>
      </div> : (null )
      }
      
    </div>
  );
}

export default Header;
