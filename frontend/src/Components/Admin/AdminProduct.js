import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import "../../Css/AdminPage.css";

import { getSubCategories } from "../../Slice/SubCategoriesSlice";
import ProductCard from "../ProductCard";
import { addProduct, deleteProduct } from "../../Slice/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategory);
  const products = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    sub_category_id: "",
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [isAccordionOpen, setİsAccordionOpen]=useState(false)
  const [productDeleteId, setProductDeleteId]=useState();

  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("sub_category_id", formData.sub_category_id);
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", formData.image);

    dispatch(addProduct(data));
  };

  const deleteProductClick=()=>{
    dispatch(deleteProduct(productDeleteId))
  }

  useEffect(() => {
    dispatch(getSubCategories());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
      <div className="accordion col-4">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header
            onClick={() => setİsAccordionOpen(!isAccordionOpen)}
            >
              Ürün ekle
            </Accordion.Header>
            <Accordion.Body>
              <div className="form-group">
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="sub_category_id">Alt kategori seç</label>
                  <Form.Select
                    aria-label="Default select example"
                    id="sub_category_id"
                    name="sub_category_id"
                    value={formData.sub_category_id}
                    onChange={handleInputChange}
                  >
                    <option>Kategoriler</option>

                    {subCategories.map((subCategory, i) => (
                      <option value={subCategory.id} key={i}>
                        {subCategory.name}
                      </option>
                    ))}
                  </Form.Select>
                  <label className="mt-3" htmlFor="exampleFormControlInput1">
                    Ürün Ekle
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Alt Kategori Ekle"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  ></input>
                  <label className="mt-3" htmlFor="exampleFormControlInput1">
                    Fiyatı
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Alt Kategori Ekle"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  ></input>{" "}
                  <label className="mt-3" htmlFor="exampleFormControlInput1">
                    Açıklama
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Alt Kategori Ekle"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></input>
                 <label className="mt-3" htmlFor="exampleFormControlInput1">
                    Fotoğraf Seç
                  </label>
                  <input
                    type="file"
                    className="form-control "
                    placeholder="Alt Kategori Ekle"
                    id="image"
                    name="image"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={handleInputChange}
                  ></input>
                 
                  <button id="catBtn" className="btn btn-success" type="submit">
                    Ekle
                  </button>
                </Form>
                <div className="form-group">
                  <label htmlFor="categorySil">Ürün sil</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e)=>setProductDeleteId(e.target.value)}
                  >
                    <option>Ürünler</option>
                    {products.map((product,i) => (
                      <option value={product.id} key={i}>
                        {product.name}
                      </option>
                    ))}
                  </Form.Select>
                  <button
                    id="catBtn"
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteProductClick}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="col-7 " >
       {
        isAccordionOpen && <ProductCard />
       }
      </div>
      </div>
    </div>
  );
};

export default Product;
