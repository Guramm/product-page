import { useState } from "react";
import "../App.css";
import Edit from "./edit-coments";

const Delete = () => {
    const [deleteItem, setDeleteItem] = useState(true)
    const [deleteButton, setDeleteButton] = useState(false)

    const DeleteItem = () => {
        setDeleteItem(!deleteItem)
        setDeleteButton(!deleteButton)
    }

    return(
        <>
        { deleteItem && <DeleteComponent /> }
        { deleteButton && <BoxComponent /> }

        <button className="delete" onClick={DeleteItem}>Delete</button>
        </>
    
    )
}

const BoxComponent = () => {
    return(
        <div className="box"></div>
    )
}

const DeleteComponent = () => {
    return( 

        <div className="first-coment-box">
        <div className="coment-logo">
          <i className="bi bi-person"></i>
        </div>
        <div className="coment-name">Ryan Welles</div>
        <div className="paren">
       
        <Edit/>
        </div>
        <div className="coment-stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i id="coment-star" className="bi bi-star"></i>
        </div>
        <div className="coment-score">Good for its price</div>
        <div className="coment">
          The quality is good considering the affordable price point. They look
          good with jeans and are quite comfortable for daily wear.
        </div>
      </div>

    )
}


export default Delete;