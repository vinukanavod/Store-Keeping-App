import React, { useState } from "react";
import "./ProductNew.css";
import axios from "axios";
import Message from "../../Components/Message/Message";
const ProductNew = () => {
  const [itemformDetails, setItemFormDetails] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: {
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    },
  });

  const [formMessage, setFormMessage] = useState({ logic: false, msg: "" });
  const [successMessage, setSuccessMessage] = useState({
    logic: false,
    msg: "",
  });

  const formSumbitHandler = async (e) => {
    e.preventDefault();
    // console.log("form inputs", itemformDetails);

    const isAnyFieldEmpty = (jsonObject) => {
      return Object.keys(jsonObject).some((key) => {
        if (key === "images") {
          if (isAnyFieldEmpty(jsonObject[key])) {
            return true;
          }
          return false;
        }
        return jsonObject[key] === "";
      });
    };
    // console.log("item to post",{...itemformDetails,images:[itemformDetails.images.img1,itemformDetails.images.img2,itemformDetails.images.img3,itemformDetails.images.img4,itemformDetails.images.img5]})
    // console.log("form filed logic", isAnyFieldEmpty(itemformDetails));
    if (isAnyFieldEmpty(itemformDetails)) {
      setFormMessage({
        logic: true,
        msg: "Please fill in all fields before submitting",
      });
      return true;
    } else {
      setFormMessage({ logic: false, msg: "" });
    }

    try {
      const newItemRespond = await axios.post(
        "https://dummyjson.com/products/add",
        {
          ...itemformDetails,
          images: [
            itemformDetails.images.img1,
            itemformDetails.images.img2,
            itemformDetails.images.img3,
            itemformDetails.images.img4,
            itemformDetails.images.img5,
          ],
        }
      );
      console.log("respond when creating item", newItemRespond);
      if (newItemRespond.request.status === 200) {
        setSuccessMessage({ logic: true, msg: "Item Creation Successfull" });
      }
    } catch (err) {
      console.log("erro creating new item");
    }
  };

  const cancelButtonHandler = () => {
    if (formMessage.logic) {
      setFormMessage({ logic: false, msg: "" });
    }
    setItemFormDetails({
      id: "",
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: "",
      images: {
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
      },
    });
  };

  const MessageHandler = (value) => {
    if (value) {
      cancelButtonHandler();
      setSuccessMessage({ logic: false, msg: "" });
    }
  };
  return (
    <div className="productNew_main">
      <div className="PN_body">
        <form className="PN_body_form" onSubmit={formSumbitHandler}>
          <div className="PNBF_div-1">
            <section id="PNBF_div_sec">
              <span>id</span>
              <input
                type="text"
                name="id input"
                value={itemformDetails.id}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    id: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>title</span>
              <input
                type="text"
                name="title input"
                value={itemformDetails.title}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    title: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>description</span>
              <input
                type="text"
                name="description input"
                value={itemformDetails.description}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    description: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>price</span>
              <input
                type="text"
                name="price input"
                value={itemformDetails.price}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    price: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>discountPercentage</span>
              <input
                type="text"
                name="discountPercentage input"
                value={itemformDetails.discountPercentage}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    discountPercentage: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>rating</span>
              <input
                type="text"
                name="rating input"
                value={itemformDetails.rating}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    rating: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>stock</span>
              <input
                type="text"
                name="stock input"
                value={itemformDetails.stock}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    stock: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>brand</span>
              <input
                type="text"
                name="brand input"
                value={itemformDetails.brand}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    brand: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>category</span>
              <input
                type="text"
                name="category input"
                value={itemformDetails.category}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    category: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>thumbnail</span>
              <input
                type="text"
                name="thumbnail input"
                value={itemformDetails.thumbnail}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    thumbnail: e.target.value,
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>image 1</span>
              <input
                type="text"
                name="image1 input"
                value={itemformDetails.images.img1}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    images: { ...itemformDetails.images, img1: e.target.value },
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>image 2</span>
              <input
                type="text"
                name="image2 input"
                value={itemformDetails.images.img2}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    images: { ...itemformDetails.images, img2: e.target.value },
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>image 3</span>
              <input
                type="text"
                name="image3 input"
                value={itemformDetails.images.img3}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    images: { ...itemformDetails.images, img3: e.target.value },
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>image 4</span>
              <input
                type="text"
                name="image4 input"
                value={itemformDetails.images.img4}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    images: { ...itemformDetails.images, img4: e.target.value },
                  });
                }}
              />
            </section>
            <section id="PNBF_div_sec">
              <span>image 5</span>
              <input
                type="text"
                name="image5 input"
                value={itemformDetails.images.img5}
                onChange={(e) => {
                  setItemFormDetails({
                    ...itemformDetails,
                    images: { ...itemformDetails.images, img5: e.target.value },
                  });
                }}
              />
            </section>
          </div>
          <div className="PNBF_div-2">
            <img src={itemformDetails.thumbnail} alt="thumbnail" />
            <section>
              <button type="submit" id="Add_item_btn">
                Add Item
              </button>
              <button
                id="PNVF_cancel_btn"
                type="reset"
                onClick={cancelButtonHandler}
              >
                Cancel
              </button>
            </section>
          </div>
        </form>
        {formMessage.logic && <p id="PN_body_p">{formMessage.msg}</p>}
      </div>
      {successMessage.logic && (
        <Message fn={MessageHandler} msg={successMessage.msg} />
      )}
    </div>
  );
};

export default ProductNew;
