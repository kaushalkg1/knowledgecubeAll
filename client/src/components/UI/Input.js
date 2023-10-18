
import React,{useState} from "react";
import {Link } from "react-router-dom";

const Input= ({onchange,placeholder,name,value,baseUrl ,title,type}) =>{
    
 const [valueInput , setValueInput] = useState({val:value});
return(
    <div  className="popup-backgrop">
      <div  className="popup-card">
        <div  className="blank"> </div>
    <div  className="popup-outer">
 <div  className="popup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>{value?"Update":"Add"} {title} </h1>
    <div  className="popup-input-card">
    <input type={type} placeholder={placeholder} className="input-textbox" title={title} value={valueInput.val} name={name}  
     onChange={e=>{
        setValueInput({...valueInput,val:e.target.value});
       
        
       }
       
    }
    onChangeCapture={onchange }
    />
    </div>
    
   <div  className="popup-button-card">
      <button  className="green-button" type="submit" id="signupBtn">{value?"Update":"Add"}</button>
  
  <Link to={baseUrl} className="black-button">
close
 </Link>
  
  </div>
  </div>
   </div>
   
   </div>
	    
	</div></div>

)

}

export default Input;

