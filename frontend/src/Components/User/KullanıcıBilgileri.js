import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import '../../Css/UserProfil.css'

function KullanıcıBilgileri() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div id='kullaniciBilgileri' className='card'>
     <h5 id='kullaniciTitle' className='card-header'>Üye Bilgileri</h5>
     <div className='card-body'>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Adınız</Form.Label>
          <Form.Control
            required
            type="text"
            
            defaultValue=""
          />
          
          <Form.Control.Feedback type="invalid">
             Adınızı Giriniz.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Soyadınız</Form.Label>
          <Form.Control
            required
            type="text"
            
            defaultValue=""
          />
          
          <Form.Control.Feedback type="invalid">
              Soyadınızı giriniz.
            </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>E Mail adresi</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            E Mail adresinizi giriniz.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Alan Kodu</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Alan Kodunu seçiniz.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom05">
          <Form.Label>Numara </Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Numaranızı giriniz.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Form.Group className="mb-3">
      <Form.Label className='mt-5'>Cinsiyet</Form.Label>
      <Row>
      <Form.Check 
          required 
          label="Kadın"
          feedback="Lüften Birini Seçiniz."
          feedbackType="invalid"
        />
        <Form.Check 
          required 
          label="Erkek"
          feedback="Lüften Birini Seçiniz."
          feedbackType="invalid"
        />
      </Row>
        
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
     </div>
    </div>
  )
}

export default KullanıcıBilgileri