import { useState } from "react";
import "../App.css";

const AddtoCart = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    const existingItem = cart.find((cart) => cart.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cart) =>
        cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cart) => cart.id !== item.id);
    setCart(updatedCart);
    
  };

  return (
    <div>
      {
        
        <div
          id="1"
          name="Product 1"
          className="add-to-cart"
          onClick={() =>
            addItemToCart({
              id: 1,
              name: "Fall Limited Edition Sneakers",
              price: 125,
              itemClear: (
                <i
                  id="trash"
                  className="bi bi-trash3"
                  onClick={() => removeFromCart()}
                ></i>
              ),
            })
          }
        >
          <div className="check" onClick={() => addItemToCart}>
            Add to cart
          </div>
        </div>
      }
      <div className="parent">
        <div className="title1">Cart</div>
        <div className="line2"></div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} ${item.price.toFixed(2)}
              {item.itemClear}
            </li>
        
             
          ))}
           {cart.length > 0 && (
        <button className="checkout" onClick={() => alert('Proceed to checkout')}>Checkout</button>
      )}
        </ul>
      </div>
    </div>
  );
};
export default AddtoCart;
