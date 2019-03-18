import React from "react";
import '../styles/css/header.css'
const Head =(props)=>{
 return( <div>
        <div className={"logo"}></div>  
        <div className={"header"}>
            <ul className="header-list-wrapper">
                <li className="header-list">Home</li>
                <li className="header-list">Products</li>
                <li className="header-list">About us</li>
                <li className="header-list">Contact us</li>
            </ul>
        </div>
    </div>
 )
}
export default Head