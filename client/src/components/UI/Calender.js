import React,{useState} from "react";

import {Link } from "react-router-dom";

const Calender = ({onchange,placeholder,name,value,baseUrl ,title})=>{ 
    
 const [valueInput , setValueInput] = useState({val:value});
     return(<>
     
     <div  className="login-signup-backgrop">
      <div  className="login-signup-card">
        <div  className="blank"> </div>
    <div  className="login-signup-card-outer">
 <div  className="login-signup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Update {name} </h1>
    <div  className="login-input-card"><div  className="login-iconAdmin"></div>
    <input type="date" placeholder={placeholder} className="input-textbox" title={title} value={valueInput.val} name={name}  
     onChange={e=>{
        setValueInput({...valueInput,val:e.target.value});
       
        
       }
       
    }
    onChangeCapture={onchange }
    />
    </div>
    
   <div  className="login-input-card"><div  className="login-iconAdmin">
  </div><button  className="login-signup-button" type="submit" id="signupBtn">Update</button>
  </div>
  <div  className="login-input-card"><div  className="login-iconAdmin">
  </div>
  <Link to={baseUrl}>
 <div className="login-signup-button closeButton" >close</div>
 </Link>
  
  </div>
  </div>
   </div>
   
   </div>
	    
	</div></div>                              
     </>)  
   }
   export default Calender;