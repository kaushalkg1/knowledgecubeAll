
import React,{useState} from "react";
import {Link } from "react-router-dom";

const TextArea= ({onchange,placeholder,name,value,baseUrl ,title}) =>{
    
 const [valueInput , setValueInput] = useState({val:value});
return(
    <div  className="login-signup-backgrop">
      <div  className="login-signup-card">
        <div  className="blank"> </div>
    <div  className="login-signup-card-outer">
 <div  className="login-signup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Update {name} </h1>
    <div  className="login-input-card"><div  ></div>
    <textarea type="text" cols={5} rows={5} placeholder={placeholder} className="input-textbox" title={title} value={valueInput.val?valueInput.val:setValueInput({...valueInput ,val:"Bio: "})} name={name}  
     onChange={e=>{
        if(valueInput.val.match(/\w+/gim)?.length<50)
        setValueInput({...valueInput ,val:e.target.value});
       
       
        
       }
      
      
       
    }
    onChangeCapture={onchange }
    />
    <div></div>
<div id="word-count" className="input-textbox"> {valueInput.val ? valueInput.val.match(/\w+/gim)?.length : 0} word(s)</div>

    </div>
    
   <div  className="login-input-card"><div  >
  </div><button  className="login-signup-button" type="submit" id="signupBtn">Update</button>
  </div>
  <div  className="login-input-card"><div  >
  </div>
  <Link to={baseUrl}>
 <div className="login-signup-button closeButton" >close</div>
 </Link>
  
  </div>
  </div>
   </div>
   
   </div>
	    
	</div></div>

)

}

export default TextArea;

