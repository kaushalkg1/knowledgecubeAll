
import React,{useState} from "react";

const Input2= ({onchange,placeholder,name,value,title,type}) =>{
    
 const [valueInput , setValueInput] = useState({val:value});
return(
   
    <input type={type} placeholder={placeholder} className="input-textbox" title={title} value={valueInput.val} name={name}  
     onChange={e=>{
        setValueInput({...valueInput,val:e.target.value});
       
        
       }
       
    }
    onChangeCapture={onchange }
    />
   

)

}

export default Input2;

