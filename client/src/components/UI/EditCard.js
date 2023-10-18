import React from "react";

import {Link } from "react-router-dom";

const EditCard = ({ button,name,url ,icon,value,title})=>{ 
    
     return(<>

<div className="outer-edit-card ">

<div className="edit-card-title ">
    {icon?<img className="edit-card-icon" src={icon}  alt={title}/> :""}

 {title?title:""} 
</div> 
<div className="edit-card-button ">
 
<span className="edit-card-value ">
{value}</span>   
{button==="N"?"":<Link to={`${url}/${name}`}>
<div className="edit-button" 

>{value?"Edit":"Add"}</div>
</Link>
}

</div>


</div>                           
     </>)  
   }
   export default EditCard;