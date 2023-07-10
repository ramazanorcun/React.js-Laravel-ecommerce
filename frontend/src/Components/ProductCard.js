import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Slice/ProductSlice";
import Card from "react-bootstrap/Card";
import "../Css/Product.css";

const ProductCard = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch]);

  return (
    <div className="cardContainer">
      {products.length > 0 ? (
        products.map((product, i) => (
          <Card key={i} className="cardProduct">
            <Card.Img
              className="card-img"
              variant="top"
              src={`http://localhost:8000/Image/${product.image}`}
            />
            <Card.Body className="cardBody">
              <h3>{product.name}</h3>
              <h4>{product.description}</h4>
              <h6>{product.price} TL</h6>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h3 >Ürün Ekli Değildir</h3>
      )}
    </div>
  );
};

export default ProductCard;
