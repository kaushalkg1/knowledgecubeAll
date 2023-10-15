

import React from "react";

const CardBig = ({icon,arrow,alt,title,details}) =>{
return(<>

        <div className="create-card add-cursor">
                <div className="create-card-icon">
       
                 <img src={icon} alt={alt}/>
                </div> <div className="create-card-text">
                    <div className="create-card-title">
                    {title} 
                 
                    </div> 
                    <div className="create-card-description">
                  {details}
                    </div> 
                </div><div className="create-card-arrow">
                    <img src={arrow} alt="arrow"/>
                </div> </div>

</>)
}
export default CardBig;