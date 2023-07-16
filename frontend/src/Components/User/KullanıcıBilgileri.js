import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import "../../Css/UserProfil.css";
import { addUserInformation, getUser } from "../../Slice/UserInformationSlice";

function KullanıcıBilgileri() {
  const dispatch = useDispatch();
  const usersInformations = useSelector((state) => state.userInformation);
  // const info = usersInformations.find((user) => user.id);
  // console.log(info.id);

  const userData = JSON.parse(localStorage.getItem("user"));
  const user = usersInformations.find((user) => user.user_id === userData.id);

  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [Woman, setWoman] = useState("Kadın");
  const [Man, setMan] = useState("Erkek");

  


  
 
  const [formData, setFormData] = useState({
    user_id: userData.id,
    name: "",
    lastName: "",
    email: "",
    gender: "",
    telephone: "",
    country_code: "",
  });
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUserInformation(formData));
  };


  //this Check box
  const handleFemaleChange = (e) => {
    setIsFemaleChecked(e.target.checked);
    setIsMaleChecked(false);
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleMaleChange = (e) => {
    setIsFemaleChecked(false);
    setIsMaleChecked(e.target.checked);
    setFormData({ ...formData, gender: e.target.value });
  };
  return (
    <div id="kullaniciBilgileri" className="card mb-4">
      <h5 id="kullaniciTitle" className="card-header">
        Üye Bilgileri
      </h5>
      <div className="card-body">
        <Form noValidate onSubmit={handleChange}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Adınız</Form.Label>
              <input
                type="text"
                className="form-control "
                placeholder={user ? user.name : ""}
                id="name"
                name="name"
                // value={formData.name}
                onChange={handleChange}
                
              ></input>

              <Form.Control.Feedback type="invalid">
                Adınızı Giriniz.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Soyadınız</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={user ? user.lastName : ""}
                name="lastName"
                // value={formData.lastName}
                onChange={handleChange}
                
              />

              <Form.Control.Feedback type="invalid">
                Soyadınızı giriniz.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>E Mail adresi</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder={user ? user.email : ""}
                name="email"
                // value={formData.email}
                onChange={handleChange}
                
              />
              <Form.Control.Feedback type="invalid">
                E Mail adresinizi giriniz.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Alan Kodu</Form.Label>
              <Form.Control
                type="text"
                required
                name="country_code"
                placeholder={user ? user.country_code : ""}
                // value={formData.country_code}
                onChange={handleChange}
               
              />
              <Form.Control.Feedback type="invalid">
                Alan Kodunu seçiniz.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationCustom05">
              <Form.Label>Numara </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder={user ? user.telephone : ""}
                name="telephone"
                // value={formData.telephone}
                onChange={handleChange}
              
              />
              <Form.Control.Feedback type="invalid">
                Numaranızı giriniz.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Label className="mt-4">Cinsiyet </Form.Label>
          <Form.Group>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox1"
                name="gender"
                // value={Woman}
                checked={user && user.gender === "Kadın"}
                onChange={handleFemaleChange}
              />
              <label className="checkboxTitle" htmlFor="checkbox1">
                Kadın
              </label>
            </div>

            <div className="checkbox-container mb-5">
              <input
                type="checkbox"
                id="checkbox2"
                name="gender"
                // value={Man}
                checked={user && user.gender === "Erkek"}
                onChange={handleMaleChange}
              />
              <label className="checkboxTitle" htmlFor="checkbox2">
                Erkek
              </label>
            </div>
          </Form.Group>

          <Button as={Col} md="8" className="btn btn-success"  type="button" onClick={handleSubmit}>
            Bilgileri Ekle
          </Button>
          {/* <button   onClick={handleSubmit}>güncelle</button> */}
        </Form>
      </div>
    </div>
  );
}

export default KullanıcıBilgileri;
