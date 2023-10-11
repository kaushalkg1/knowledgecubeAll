import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { userSignup } from "../store/actions/User";

import Name from "./icons/person_add_FILL0_wght200_GRAD0_opsz40.svg";
import Email from "./icons/maps_ugc_FILL0_wght200_GRAD-25_opsz40.svg";
import Password from  "./icons/post_add_FILL0_wght200_GRAD0_opsz40.svg";
import AddButton from  "./icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";
import KnowledgeCube from "./img/knowledgecube.gif";


import Navber from "../Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const SignUp = ()=>{

 const dispatch = useDispatch();
  

 const history = useHistory();
 
 const localToken= JSON.parse(localStorage.getItem("profile"))?.data?.user?.currentToken;
 const token = useSelector((state)=>state?.user?.user?.user?.currentToken);


 const [signup, setSignup] = useState({firstName:"",lastName:"",userName:"",email:'',password:"",
 acceptTermsAndConditions:false,
 subscribeToNewsleter:false,phoneNumber:+91,age:"",bio:"",gender:""
 
});



// import FileBase from "react-file-image-to-base64";

// profilePhoto :
// <FileBase  name="profilePhoto" preferredButtonText="Add Profile Photo"  multiple={false} value={signup.profilePhoto} onCompleted={(base64)=>setSignup({...signup, profilePhoto : base64[0]})} />
// coverPhoto :
// <FileBase  name="coverPhoto" preferredButtonText="Add Cover Phote"  multiple={false} value={signup.coverPhoto} onCompleted={(base64)=>setSignup({...signup, coverPhoto : base64[0]})} />





/* Handle Signup Function */
const handleSignUp=(e)=>{
  e.preventDefault();
//console.log(signup)

  const user = dispatch(userSignup(signup));
  /* get response as Promise   */
  user.then(response => {
  // console.log(response);
   

/* resetting Signup input Fields */
setSignup({firstName:"",lastName:"",userName:"",email:'',password:"",
acceptTermsAndConditions:false,
subscribeToNewsleter:false,phoneNumber:+91,age:"",bio:"",profilePhoto:"",coverPhoto:""

})

history.push('/dashboard/profile');
  }).catch(error => {
    
/* resetting Signup input Fields */
setSignup({firstName:"",lastName:"",userName:"",email:'',password:"",
acceptTermsAndConditions:false,
subscribeToNewsleter:false,phoneNumber:+91,age:"",bio:"",profilePhoto:"",coverPhoto:""

})
    console.error(error);
  });
 
  }

    return <>
    
{(token===localToken&&token&&localToken)?
<>
<div className="outer-all "><div className = {` outer-left `}  id="outer-left">
  
 
      
      </div>
    <div className="outer-right">
        <div className="content-topk">
          <h1> You Are Already logged In</h1>
        </div>
        <div className="outer-logged-in">

<Navber/>
</div></div></div>
</> :<>
  <form onSubmit={handleSignUp} >
  <div  className="login-signup-backgropj"><div  className="login-signup-card"><div  className="blank"> </div>
  <div  className="login-signup-card-outerj"><div  className="login-signup-inner">
    <div  className="login-signup-left-signup">
      <h1 style={{"textAlign":"center"}}>User SignUp</h1>
      <div  className="login-input-card-half">
        <div  className="login-input-card"><div  className="login-iconAdmin"><img src={ Name} alt="FirstName"/></div>
         <input className="input-textbox" required placeholder="First Name" type="text" name="firstName" value={signup.firstName} onChange={(e)=>setSignup({...signup, firstName : e.target.value})} />
</div><div  className="login-input-card"> <div  className="login-iconAdmin"><img src={Name} alt="lastname"/></div>
<input type="text" required placeholder="Last Name" className="input-textbox" name="lastName" value={signup.lastName} onChange={(e)=>setSignup({...signup, lastName : e.target.value})} />
 </div></div><div  className="login-input-card"><div  className="login-iconAdmin"><img src={ Name } alt=""/></div><input  className="input-textbox"   placeholder="User Name" type="text" name="userName" value={signup.userName} onChange={(e)=>setSignup({...signup, userName : e.target.value})} />
 </div><div  className="login-input-card"><div  className="login-iconAdmin"><img src={ Email } alt=""/></div>
 <input className="input-textbox" required placeholder="Email" type="text" name="email" value={signup.email} onChange={(e)=>setSignup({...signup, email : e.target.value})} />
   </div><div  className="login-input-card"><div  className="login-iconAdmin"><img src={Password} alt="Email"/></div>
     <input className="input-textbox" required placeholder="Password" type="text" name="password" value={signup.password} onChange={(e)=>setSignup({...signup, password : e.target.value})} />
    </div>
	  
   
    <div  className="login-input-card-half">

  <div  className="login-input-card">
<label className="radio-outer"> Male 
 <input
          type="radio"className="input-textbox"
          name="gender"
          value={signup.gender}
            onChange={(e)=>setSignup({...signup, gender:"Male"})}
        />
  <span className="circle"></span>
</label> </div><div  className="login-input-card">
 <label className="radio-outer">Female
<input
          type="radio"className="input-textbox"
          name="gender"
          value={signup.gender}
            onChange={(e)=>setSignup({...signup, gender:"Female"})}
        /> 
  <span className="circle"></span>
</label>  </div>
</div>

<div  className="login-input-card">Phone 
 <input type="number" className="input-textbox" name="phoneNumber" value={signup.phoneNumber} onChange={(e)=>setSignup({...signup, phoneNumber : e.target.value})} /></div>
    
    <div  className="login-input-card"> Age 
 <input type="date" className="input-textbox" name="age" value={signup.age} onChange={(e)=>setSignup({...signup, age : e.target.value})} />
   </div>
    
    <div  className="login-input-card">BIO 
  <textarea type="text" className="input-textbox" name="bio" value={signup.bio} onChange={(e)=>setSignup({...signup, bio : e.target.value})} />
   </div>
    
   
     <div  className="login-input-card"><div  ></div>
  <label className="checkbox-outer">I Accept Terms And Conditions:
  <input
          type="checkbox"
          name="acceptTermsAndConditions"
         
          checked={signup.acceptTermsAndConditions}
          onChange={(e)=>setSignup({...signup, acceptTermsAndConditions:!signup.acceptTermsAndConditions})}
        />
  <span className="square"></span>
</label>    </div>
   




<div  className="login-input-card"><div  ></div>
<label className="checkbox-outer">Subscribe To News Leter: 
<input
          type="checkbox" 
          name="subscribeToNewsleter"
          checked={signup.subscribeToNewsleter}
            onChange={(e)=>setSignup({...signup, subscribeToNewsleter:!signup.subscribeToNewsleter})}
        /> 
  <span className="square"></span>
</label>  </div>
	
	<div  className="login-input-card"><div  className="login-iconAdmin"><img src={AddButton} alt="Add "/></div>
  <button  className="login-signup-button" type="submit" id="signupBtn">Create Account</button></div></div>
  </div><div style={{"textAlign":"center"}}>
    <img src={KnowledgeCube} alt="KnowledgeCube" style={{"width":"55% " }} /></div></div><div  className="blank"></div></div></div>
   </form>
</>}
    </>

}
export default SignUp;