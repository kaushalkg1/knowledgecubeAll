import React from "react";
const CardNav = ({icon,alt,title}) =>{
return(<>
<div  className=" item-card-nav  add-cursor" >
            <div  className="item-icon">
            <img src={icon} alt={alt}/>
            </div>
            <div  className="item-text-nav">
            {title} 
            </div>
        </div>


</>)
}
export default CardNav;