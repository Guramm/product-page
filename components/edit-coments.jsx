import { useState } from "react";
import "../App.css";

const Edit = () => {
    const [editItem, setEditItem] = useState(false)
    

    const Edit = () => {
        setEditItem(!editItem)
    }

    return(
        <>
        { editItem && <EditComponent /> }
        <button className="edit" onClick={Edit}>Edit</button>
        </>
    
    )

}
const EditComponent = () => {
    return(
        <>
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
        value={"Good for its price"}
        placeholder="What’s most important to know?"
      />
      <div className="review">Writte review</div>
      <input
        className="revie"
        type="text"
        name=""
        id=""
        value={"The quality is good considering the affordable price point. They look good with jeans and are quite comfortable for daily wear"}
        placeholder="What did you like or dislike? What did you use this product for?"
      />
      <button className="add"><p className="ad">Add</p></button>
    </div>
        </>
    )
}


export default Edit