import React from "react";
import "../../Css/UserProfil.css";

function Siparisler() {
  return (
    <div className="siparisler">
      <div className="card">
        <div className="card-header  ">
          <div className="row">
            <label className="col-3">
              Sipariş tarihi
              <div>31/08/20</div>
            </label>
            <label className="col-3">
              Alıcı
              <div>31/08/20</div>
            </label>
            <label className="col-3">
              Tutar
              <div>31/08/20</div>
            </label>
            <button className="col-3">Sipariş</button>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <h5 id="teslimEdildi" className="card-title">
              Teslim edildi{" "}
            </h5>
            <h5 id="teslimEdilmedi" className="card-title">
              Teslim edilmedi
            </h5>
          </div>

          <div className="col-6">
            <img
              src="https://www.islamveihsan.com/wp-content/uploads/2022/05/resim-ne-demek-187530.jpg"
              className="img-fluid"
              alt="..."
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siparisler;
