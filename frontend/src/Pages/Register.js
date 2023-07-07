/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react'
import '../Css/Register.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from '../Slice/AuthSlice';
import { toast } from 'react-toastify';


function Register() {
  
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleRegister = () => {

    if (name && email && password) {
      dispatch(register({ name, email, password }))
        .then(() => {
          toast.success(
            <div>
               <span style={{ color: "green" }}>{name}</span>, Kayıt işleminiz başarıyla gerçekleşti.
            </div> ,{
              autoClose:2000,
            }
          );
          navigate("/")
        })
        .catch();
    }
    else {
      let errorFields = [];
      if (!name) {
        errorFields.push("İsim");
      }
      if (!email) {
        errorFields.push("E-posta");
      }
      if (!password) {
        errorFields.push("Şifre");
      }
  
      toast.error(
        <div style={{ color: "red" }}>{errorFields.join(", ")} alanı  boş bırakılamaz</div>,
        {
          autoClose: 2000,
        }
      );
    }
    
  };
  return (
    <div>
       <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
               

                <div className="divider d-flex align-items-center my-4">
             
                  <p className="text-center fw-bold mx-3 mb-0">Register</p>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid Name"
                    onChange={(e)=>setName(e.target.value)}
                  />
                 
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                
                </div>

                <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                 
                </div>

              

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg,"
                    onClick={ handleRegister}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                  go to login page
                    <a href="/" className="link-danger">
                      Login Page
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
