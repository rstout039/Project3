import React from "react";
import "./style/css";

// The ...props means, spread all of the past props onto this element //
// That way we dont have to define them all individually //

function DeleteBtn(props){
    return(
        <span className = "delete-btn" {...props} role = "button" tabIndex = "0">
            
        </span>
    );
}

export default DeleteBtn;