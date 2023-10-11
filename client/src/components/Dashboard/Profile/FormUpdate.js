
import React from "react";

const FormUpdate= ({onchange,placeholder,name}) =>{

return(
   
 <div  className="login-signup-inner">
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Update {name} </h1>
    <div  className="login-input-card"><div  className="login-iconAdmin"></div>
    <input type="text" placeholder={placeholder} className="input-textbox"  name={name} onChange={onchange} 
    />
   
   </div>
	  
    
	
	</div></div></div></div></div>

)

}

export default FormUpdate;

