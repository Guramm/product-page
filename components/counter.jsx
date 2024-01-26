import { useState } from "react";
import "../App.css";

const Counter = () => {
    const [count,setCount] = useState(0);

    const minus = () => {
      setCount (count - 1)
    }
    const plius = () => {
      setCount (count + 1)
    }
    if (count < 0 )  {
       return("Error!")
    }

    return(
        <>
        <button  className="minus" onClick={minus}>-</button>
        <p className="number">{count}</p>
        <button onClick={plius} className="plius">+</button>
        </>
        
    )
}
export default Counter;