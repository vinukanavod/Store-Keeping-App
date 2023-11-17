import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../Store/LoginSlice";
import Message from "../../Components/Message/Message";
import { useNavigate } from "react-router-dom";

const Product = () => {
  // let productList = [];
  const [message, setmMessage] = useState({ logic: false, msg: "" });
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axios.get("https://dummyjson.com/products");
        // productList = products.data.products;
        setProductList(products.data.products);
        // console.log(products.data.products);
      } catch (err) {
        console.log("error occured when fetching posts");
      }
    };

    fetchProducts();
  }, []);


  // button handling functions

  const logoutHandler = () => {
    console.log("logout handler working");
    dispatch(LoginActions.removeStatus());
  };

  const SingleProductDeleteHandler = (value) => {
    if(value){

      setmMessage({
        logic: true,
        msg: "Item Deletion Succesfull !",
      });
    }
  };
  const MessageHandler = (value) => {
    if (value) {
      if (message.logic) {
        setmMessage({
          logic: false,
          msg: "",
        });
      }
    }
  };

  return (
    <div className="product_main">
      <section className="PM_sec sec-1">
        <button id="addNew_btn" onClick={()=>{navigation("/product/new")}}> + ADD NEW</button>
        <button id="logout_btn" onClick={logoutHandler}>
          {" "}
          Logout
        </button>
      </section>
      <section className="PM_sec sec-2">
        {productList.map((singleProduct) => {
          return (
            <div key={singleProduct.id}>
              <ProductCard
                title={singleProduct.title}
                brand={singleProduct.brand}
                price={singleProduct.price}
                desc={singleProduct.description}
                rating={singleProduct.rating}
                imgSrc={singleProduct.thumbnail}
                id={singleProduct.id}
                function={SingleProductDeleteHandler}
              />
            </div>
          );
        })}
      </section>
      {message.logic && <Message fn={MessageHandler} msg={message.msg || ""} />}
    </div>
  );
};

export default Product;
