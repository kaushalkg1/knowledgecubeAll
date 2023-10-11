import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { userLogin} from "../store/actions/User";
import Email from "./icons/maps_ugc_FILL0_wght200_GRAD-25_opsz40.svg";
import Password from  "./icons/post_add_FILL0_wght200_GRAD0_opsz40.svg";
import AddButton from  "./icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import KnowledgeCube from "./img/knowledgecube.gif";
import Navber from "../Navbar";
import { useSelector } from "react-redux";
//import { setCookie } from "../api";
const Login = ()=>{

  const dispatch = useDispatch();
  const history = useHistory();

  const localToken= JSON.parse(localStorage.getItem("profile"))?.data?.user?.currentToken;
    const token = useSelector((state)=>state?.user?.user?.user?.currentToken);
  
    
 const [login , setLogin] =useState({email:'',password:""});





 /* handle Login function  */
const handleLogin=(e)=>{
  e.preventDefault();

  const user = dispatch(userLogin(login));
  /* get response as Promise  and set it in redux or state and display it with useEffect */
  user.then(response => {
  // console.log(response);
  console.log(response);
  

/* resetting Login input Fields */
setLogin({email:'',password:""})
 history.push('/dashboard/profile')
 }).catch(error => {
   console.error(error);
 });

}


    return (<>
    
{(token===localToken&&token&&localToken)?
<>
<div className="outer-all "><div className = {` outer-left `}  id="outer-left">
  
 
      
      </div>
    <div className="outer-right">
        <div className="content-topk">
          <h1> You Are Already logged In</h1>
        </div>
        <div className="outer-logged-in">
<Navber/></div></div></div>
</> :<>
  <form onSubmit={handleLogin} >
  <div  className="login-signup-backgrop"><div  className="login-signup-card"><div  className="blank"> </div>
  <div  className="login-signup-card-outer"><div  className="login-signup-inner">
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>User Login</h1>
    <div  className="login-input-card"><div  className="login-iconAdmin"><img src={ Email } alt=""/></div>
 <input type="text" placeholder="Email" className="input-textbox"  name="email" value={login.email} onChange={(e)=>setLogin({...login, email : e.target.value})} />

   </div><div  className="login-input-card"><div  className="login-iconAdmin"><img src={Password } alt="Email"/></div>
     <input type="text" placeholder="Password"  className="input-textbox" 
      name="password" value={login.password} onChange={(e)=>setLogin({...login, password : e.target.value})} />

     </div>
	  
    
	
	<div  className="login-input-card"><div  className="login-iconAdmin"><img src={AddButton} alt="Password"/>
  </div><button  className="login-signup-button" type="submit" id="signupBtn">Login</button>
  </div></div></div><div style={{"textAlign":"center"}}>
    <img src={KnowledgeCube} alt="KnowledgeCube" style={{"width":"55% " }} /></div></div><div  className="blank"></div></div></div>
   </form></>

 

}
</>)

}
export default Login;