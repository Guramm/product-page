import "./App.css";
import AddtoCart from "./components/add-to-cart";
import Counter from "./components/counter";
import { useState } from "react";


const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const CartVisible = () => {
    setIsCartVisible(!isCartVisible);
};
 

  return (
    <>
      <div className="header">
        <div className="logo"></div>
        <div className="links">
          <a href="#">Colections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="cart"onClick={CartVisible}>
          <i  className="bi bi-cart3"></i>
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
            <div className="procent"><p>50%</p></div>
            <div className="old-price">$250.00</div>
          </div>
        </div>
        <div className="add-container">
          <div className="minus-plius">
           <Counter/>
          </div>
          <AddtoCart/>
        </div>
      </div>
      <div className="footer">
        <div className="costumer-reviews">Costumer reviews</div>
        <div className="write"><p className="innertxt">Write a review</p></div>
      </div>
    </>
  ); 
}


export default App;
