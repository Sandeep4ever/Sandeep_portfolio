import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h6 className="pl-title">My Beautiful Projects</h6>
        <p className="pl-desc">
          All the projects that are listed below have been done by me , mostly
          these are built on top of{" "}
          <strong>HTML5 ,CSS, Bootstrap, React.JS, Javascript, JQuery</strong>
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => {
          return <Product key={item.id} img={item.img} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
