import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addSubCategories,
  deleteSubCategories,
  getSubCategories,
  updateSubCategories,
} from "../Slice/SubCategoriesSlice";
import "../Css/AdminPage.css";
import { toast } from "react-toastify";


function AdminAddSubCategory() {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategory);
  const categories = useSelector((state) => state.category);

  
  const [isAccordionOpen2, setİsAccordionOpen2] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category_id, setCategory_id] = useState();
  const [deleteName, setDeleteName] =useState();
  const [subCategoryName, setSubCategoryName] = useState("");
  const [name, setName] =  useState("");
  const [updateSubId, setUpdateSubId] =useState();

  useEffect(() => {
    dispatch(getSubCategories());
  }, [dispatch]);

  //sub Category add
  const handleClick = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data) {
      dispatch(addSubCategories(data));
      setSubCategoryName("");
    }
    toast.success(
      <div>
        Kategori <span style={{ color: "green" }}>{subCategoryName}</span> Eklendi.
      </div> ,{
        autoClose:2000,
      }
    );
    setCategory_id("");
  };

  //sub category Delete,
  const changeSubCategory = (e) =>{
    //toast name Alındı
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const toastName = selectedOption.innerText;
    setDeleteName(toastName);

    const id = e.target.value;
    setSubCategoryId(id);
  }

  const deleteSubCategory = (e) => {
    dispatch(deleteSubCategories(subCategoryId));
    toast.error(
      <div>
        Kategori <span style={{ color: "red" }}>{deleteName}</span> Silindi.
      </div> ,{
        autoClose:2000,
      }
    );
    setSubCategoryId("");
  };
  //sub category update 
  const updateSubCategoryChange = (e) =>{
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const toastUpdateName = selectedOption.innerText;
    setUpdateName(toastUpdateName);

    const id = e.target.value;
    setUpdateSubId(id);

  }
  const updateSubCategory = (e) => {
    e.preventDefault();
    dispatch(updateSubCategories({ updateSubId, name }));
    toast.info(
      <div>
        Kategori <span style={{ color: "red" }}>{updateName}</span>, Kategori{" "}
        <span style={{ color: "red" }}>{name}</span> olarak güncellendi
      </div> ,{
        autoClose:2000,
      }

    );
    setName("");
    setUpdateSubId("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="accordion col-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                onClick={() => setİsAccordionOpen2(!isAccordionOpen2)}
              >
                Alt  Kategori ekle
              </Accordion.Header>
              <Accordion.Body>
                <div className="form-group">
                  <Form onSubmit={handleClick}>
                  <label htmlFor="exampleFormControlInput1">
                      Üst Kategori Seç
                    </label>
                    <Form.Select
                      name="category_id"
                      aria-label="Default select example"
                      value={category_id}
                      onChange={(e) => setCategory_id(e.target.value)}
                    >
                      <option>Kategoriler</option>
                      {categories?.map((category, i) => (
                        <option value={category.id} key={i}>
                          {category.name}
                        </option>
                      ))}
                    </Form.Select>
                    
                    <label className="mt-3" htmlFor="exampleFormControlInput1">
                      Alt Kategori Ekle
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control "
                      placeholder="Alt Kategori Ekle"
                      value={subCategoryName}
                      onChange={(e) => setSubCategoryName(e.target.value)}
                    ></input>
                     
                    <button
                      id="catBtn"
                      className="btn btn-success"
                      type="submit"
                    >
                      Ekle
                    </button>
                  </Form>
                </div>
                <div className="form-group">
                  <label htmlFor="categorySil">Alt Kategori Sil</label>
                  <Form.Select
                    aria-label="Default select example"
                    value={subCategoryId}
                    onChange={changeSubCategory}
                  >
                    <option> Kategoriler</option>
                    {subCategories?.map((subCategory, i) => (
                      <option value={subCategory.id} key={i}>
                        {subCategory.name}
                      </option>
                    ))}
                  </Form.Select>
                  <button
                    id="catBtn"
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteSubCategory}
                  >
                    Sil
                  </button>
                </div>
                <div className="form-group">
                  <label htmlFor="kategoriGüncelle">Alt kategori seç</label>
                  <Form.Select
                    aria-label="Default select example"
                    value={updateSubId}
                    onChange={updateSubCategoryChange}
                  >
                    <option>Kategoriler</option>

                    {subCategories.map((subCategory,i) => (
                      <option value={subCategory.id} key={i}>
                        {subCategory.name}
                      </option>
                    ))}
                  </Form.Select>
                  <label className="mt-3" htmlFor="Kategori Güncelle">
                    Alt kategori güncelle
                  </label>
                  <input
                      name="name"
                      type="text"
                      className="form-control "
                      placeholder="Kategori Güncelle"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                 
                  <button
                    id="catBtn"
                    type="button"
                    className="btn btn-info"
                    onClick={updateSubCategory}
                  >
                    Güncelle
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {isAccordionOpen2 && (
          <div className="table col-8">
            <h3>Alt Kategoriler</h3>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">id</th>
                  <th scope="col">Alt Kategori Adı</th>
                </tr>
              </thead>
              <tbody>
                {subCategories.length > 0 ? (
                  subCategories.map((subCategory, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{subCategory.id}</td>

                      <td>{subCategory.name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="tableBos">
                      Kategori Ekli Değil
                    </td>
                  </tr>
                )}
               
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminAddSubCategory;
