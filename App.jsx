import "./App.css";
import AddtoCart from "./components/add-to-cart";
import Counter from "./components/counter";
import { useState } from "react";
import Delete from "./components/delete-coment";

const App = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showCart,setShowCart] = useState(false)

  const handleClick = () => {
    setShowComponent1(!showComponent1);
    setShowComponent2(!showComponent2);
  };
  const handleCart = () => {
    setShowCart(!showCart)
  }

  

  return (
    <div>
      {showComponent1 && <Component1 />}
      {showComponent2 && <Component2 />}
      <div className="write" onClick={handleClick}>
        <button className="innertxt">
          <p>Write a review</p>
        </button>
        <button className="cancle" onClick={handleClick }><p className="cancl">Cancle</p></button>
      </div>
      

      <div className="header">
        <div className="logo"></div>
        <div className="links">
          <a href="#">Colections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="cart" onClick={handleCart}>
          <i className="bi bi-cart3"></i>
        </div>
        <div className="oval"></div>
        <div className="line"></div>
      </div>
      <div className="middle">
        <div className="sneakers">
          <div className="main-img"></div>
          <div className="little-images">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            <div className="fourth"></div>
          </div>
        </div>
        <div className="container">
          <div className="name">Sneaker Company</div>
          <div className="limited">Fall Limited Edition Sneakers</div>
          <div className="stars-cont">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i id="star" className="bi bi-star"></i>
              <div className="score">4.2 out of 5</div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </div>
          <div className="price-cont">
            <div className="new-price">$125.00</div>
            <div className="procent">
              <p>50%</p>
            </div>
            <div className="old-price">$250.00</div>
          </div>
        </div>
        <div className="add-container">
          <div className="minus-plius">
            <Counter />
          </div>
          <AddtoCart />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

const Component1 = () => {
  return (
    <div className="Coments">
      <div className="costumer-reviews">Costumer reviews</div>
      
      <Delete/>
      
      <div className="second-coment-box">
        <div className="coment-logo">
          <i className="bi bi-person"></i>
        </div>
        <div className="coment-name">Emily Moore</div>
        <div className="coment-stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <div className="coment-score">Great quality</div>
        <div className="coment">
          Comfortable for long walks, and theyve held up great so far. Theyve
          quickly become my go-to pair
        </div>
      </div>
      <div className="third-coment-box">
        <div className="coment-logo">
          <i className="bi bi-person"></i>
        </div>
        <div className="coment-name">Patricia Lebsack</div>
        <div className="coment-stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <div className="coment-score">Recommended</div>
        <div className="coment">
          Absolutely love these sneakers! They have a sleek, modern design with
          a comfortable fit right out of the box.
        </div>
        <div className="hide-cancle"></div>
      </div>
    </div>
  );
};

const Component2 = () => {
  return (
    <div className="add-Review">
      <div className="title">Add a review</div>
      <div className="rating">Overall Rating</div>
      <div className="stars-container">
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
      </div>
      <div className="headline">Headline</div>
      <input
        className="headlin"
        type="text"
        name=""
        id=""
        placeholder="What’s most important to know?"
      />
      <div className="review">Written review</div>
      <input
        className="revie"
        type="text"
        name=""
        id=""
        placeholder="What did you like or dislike? What did you use this product for?"
      />
      <button className="add"><p className="ad">Add</p></button>
    </div>
  );
};



export default App;
