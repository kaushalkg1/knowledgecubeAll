import React from "react";
const Card = ({icon,alt,title}) =>{
return(<>
<div  className=" item-card  add-cursor" >
            <div  className="item-icon">
            <img src={icon} alt={alt}/>
            </div>
            <div  className="item-text">
            {title} 
            </div>
        </div>


</>)
}
export default Card;