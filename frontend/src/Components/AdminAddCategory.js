import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../Slice/CategoriesSlice";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import "../Css/AdminPage.css";
import { toast } from "react-toastify";

function AdminAddCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  const [isAccordionOpen, setİsAccordionOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [name, setName] = useState("");
  const [deleteName, setDeleteName] = useState();
  const [updateName, setUpdateName] = useState();
console.log(categoryId);
  //category Çekme
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  //category ekleme
  const handleClick = () => {
    if (categoryName) {
      dispatch(addCategories({ name: categoryName }));
      setCategoryName("");
    }
    toast.success(
      <div>
        Kategori <span style={{ color: "green" }}>{categoryName}</span> Eklendi.
      </div> ,{
        autoClose:2000,
      }
    );
  };

  //category Silme
  const deleteCategoryChange = (e) => {
    //toast Name alındı
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const toastDeleteName = selectedOption.innerText;
    setDeleteName(toastDeleteName);

    const id = e.target.value;
    setCategoryId(id);
  };

  const deleteCategoryClick = (e) => {
    dispatch(deleteCategories(categoryId));
    toast.error(
      <div>
        Kategori <span style={{ color: "red" }}>{deleteName}</span> Silindi.
      </div> ,{
        autoClose:2000,
      }
    );
  };

  //category güncelle
  const updateCategoryChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const toastUpdateName = selectedOption.innerText;
    setUpdateName(toastUpdateName);

    const id = e.target.value;
    setCategoryId(id);
  };

  const updateCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategories({ categoryId, name }));
    toast.info(
      <div>
        Kategori <span style={{ color: "red" }}>{updateName}</span>, Kategori{" "}
        <span style={{ color: "red" }}>{name}</span> olarak güncellendi
      </div> ,{
        autoClose:2000,
      }
    );
    // setCategoryName("");
    // setCategoryId("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="accordion col-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                onClick={() => setİsAccordionOpen(!isAccordionOpen)}
              >
                Kategori ekle
              </Accordion.Header>
              <Accordion.Body>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    kategori Ekle
                  </label>
                  <input
                    type="text"
                    name="category_id"
                    id={categoryId}
                    className="form-control "
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Kategori Ekle"
                  ></input>
                  <button
                    id="catBtn"
                    className="btn btn-success"
                    onClick={handleClick}
                  >
                    Ekle
                  </button>
                </div>
                <div className="form-group">
                  <label htmlFor="categorySil">kategori sil</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={deleteCategoryChange}
                  >
                    <option>Kategoriler</option>
                    {categories.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                  <button
                    id="catBtn"
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteCategoryClick}
                  >
                    Sil
                  </button>
                </div>
                <div className="form-group">
                  <label htmlFor="kategoriGüncelle">kategori seç</label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={updateCategoryChange}
                  >
                    <option>Kategoriler</option>

                    {categories.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                  <label className="mt-3" htmlFor="Kategori Güncelle">
                    kategori güncelle
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kategori Güncelle "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <button
                    id="catBtn"
                    type="button"
                    className="btn btn-info"
                    onClick={updateCategory}
                  >
                    Güncelle
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {isAccordionOpen && (
          <div className="table col-8">
            <h3>Kategoriler</h3>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">id</th>
                  <th scope="col">Kategori Adı</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((category, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{category.id}</td>

                      <td>{category.name}</td>
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

export default AdminAddCategory;
