import React,{useState} from "react";
const Checkbox = ( {onchange,name,value,type,status,title}) =>{
    
 const [active , setActive] = useState({status:status});
  return(<>
  
   <label class={type==="checkbox"?"checkbox-outer":"radio-outer"}>
                                            <div style={{"marginLeft": "30px","marginTop": "-10px" }} >{value}</div>
                                                <input type={type} title={title}
                                                 className="input-textbox" checked= {active.status} value={value} name={name}  
     onChange={e=>{
        setActive({...active,status:!active.status});
       
        
       }
       
    }
    onChangeCapture={onchange }
    />
                                                   <span class={type==="checkbox"?"square":"circle"}></span>
                                          </label>
   
  </>)  
}
export default Checkbox;