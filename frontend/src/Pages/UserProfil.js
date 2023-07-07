import React, { useState } from "react";
import "../Css/UserProfil.css";
import Siparisler from "../Components/Siparisler";
import Favoriler from "../Components/Favoriler";
import KullanıcıBilgileri from "../Components/KullanıcıBilgileri";
import AdresBilgileri from "../Components/AdresBilgileri";

function UserProfil() {
  const [name, setName] = useState("siparişlerim");
  const [currentPage, setCurrentPage] = useState("Siparişlerim");

  const handleMenuClick = (page) => {
    performAction1(page);
    performAction2(page);
  };

  const performAction1 = (page) => {
    setName(page);
  };
  const performAction2 = (name) => {
    setCurrentPage(name);
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div id="card" className="card ">
            <div className="card-body">{userData.name}</div>
          </div>
          <div id="card" className="card">
            <div className="card-title">Siparişlerim</div>
            <hr></hr>
            <span>
              <a
                href="#/"
                name="siparişlerim"
                onClick={(event) => {
                  event.preventDefault()
                  handleMenuClick("Siparişlerim")}}
              >
                Siparişlerim
              </a>
            </span>
            <span>
              <a
                href="#/"
                name="favorilerim"
                onClick={(event) => handleMenuClick("Favoriler")}
              >
                Favorilerim
              </a>
            </span>
          </div>
          <div id="card" className="card">
            <div className="card-title">Hesabım</div>
            <hr></hr>
            <span>
              <a
                href="#/"
                name="kullanıcı bilgilerim"
                onClick={() => handleMenuClick("KullanıcıBilgileri")}
              >
                Kullanıcı Bilgilerim
              </a>
            </span>
            <span>
              <a
                href="#/"
                name="adres bilgilerim"
                onClick={() => handleMenuClick("AdresBilgileri")}
              >
                Adres Bilgilerim
              </a>
            </span>
          </div>
        </div>
        {name && (
          <div className=" col-9 ">
            <div id="card-title" className="card">
              {name}
            </div>
            {currentPage === "Siparişlerim" && <Siparisler />}
            {currentPage === "Favoriler" && <Favoriler />}
            {currentPage === "KullanıcıBilgileri" && <KullanıcıBilgileri />}
            {currentPage === "AdresBilgileri" && <AdresBilgileri />}
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}

export default UserProfil;
