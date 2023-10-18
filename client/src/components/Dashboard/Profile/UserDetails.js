import React ,{useState}from "react";
import { useSelector } from "react-redux";
import { updateUserData } from "../../../store/actions/User";
import "./Profile.css";
import { useDispatch } from "react-redux";
import {Link, useRouteMatch,Switch, Route } from "react-router-dom";

import Input from "../../UI/Input";
import Checkbox from "../../UI/Checkbox";
import '../../UI/snackbar.css';
import Calender from "../../UI/Calender";
import TextArea from "../../UI/TextArea";

import websiteIcon from "../../img/chat.png";
import iconProfile from "../../icons/add_a_photo_FILL0_wght200_GRAD0_opsz40.svg";
import Loading from "../../Loading/Loading";
import EditCard from "../../UI/EditCard";
const UserDetails =() =>{

  // const {category} = useParams();
  const {url,path} =useRouteMatch();
  const dispatch = useDispatch();
  const profilePicCss={
      "float":"left","position":"absolute",
      "marginLeft":"5px",
      "zIndex":"9",
      "width":"100px",  
      "height":"100px",
      "borderRadius":"50%",
      "border":"5px solid #fff"
  }
const coverPicCss={"width":"100%"}

  const profilePic = "http://www.ilogically.com/wp-content/uploads/2023/08/727399.png";
  const coverPic = "http://www.ilogically.com/wp-content/uploads/2023/08/coverPic.gif";

    
    
  const userdata = useSelector((state)=>state?.user?.user);
  const [data, setData]= useState({field:'',title:'',value:'',id:userdata?.user?.id?userdata?.user?.id:'',token:userdata?.token?userdata?.token:''});

  const [showSnackBar , setSnackBar] = useState({status:false,show:false})

  
 const [loader , setLoader] =useState({status:false});
/* handle Login function  */
const handleUpdate=(e)=>{
    e.preventDefault();
  
setLoader({status:true});
     const user = dispatch(updateUserData(data));

    user.then(response => {
//    console.log(response?.user?.firstName);

if(response?.user){
  //  console.log(response?.user?.lastName);
  setSnackBar({status:true,show:true});
 
  setTimeout(function(){setSnackBar({status:false}); }, 3000);
}
else{
    setSnackBar({status:false,show:true});
 

};
  
setLoader({status:false});



 }).catch(error => {
  // console.error(error);
   setSnackBar({status:false,show:true});
   setLoader({status:false});
 });



}
const inputGetValue = 
    (e)=>
    {
             setData({...data,field:e.target.name,title:e.target.title, value:e.target.value});
        
   
    }
    return(<>
    <h3> User Details </h3>
    
{<Loading Load={loader?.status}/>}
{ (showSnackBar.status && showSnackBar.show ) ?  <div id="snackbarUser" >
  {data.value?data.title +"has been Changed to "+data.value : data.title +" has been Removed "}.</div> : '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Couldn`t update {data.title} | Error Occured.</div> : '' }

<div className="outer-profile-photos  ">

<div style={{"position":"relative"}}><div style={{"position":"absolute","zIndex":"99"}}>
  <img style={profilePicCss}  src={userdata?.user.profilePhoto?userdata?.user.profilePhoto:profilePic} alt="profilePhoto"/>
  
  <Link to={`${url}/profilePhoto`}>
<div className="editProfile" >
  <img src={iconProfile} style={{"background":"#fff","padding":"2px", "borderRadius":"50%"}} alt="iconProfile"/> </div>
</Link>
</div>
<img  style={coverPicCss} src={userdata?.user.coverPhoto?userdata?.user.coverPhoto:coverPic} alt="coverPhoto"/>
<Link to={`${url}/coverPhoto`}>
<div className="editCover" >Edit Cover </div>
</Link>
</div>

</div>


<EditCard 
url={url} name="firstName"  title="First Name"
value={userdata?.user.firstName?userdata?.user.firstName:""}
/>

<EditCard  
 url={url} name="lastName"  title="Last Name"
value={userdata?.user.lastName?userdata?.user.lastName:''}
/>

<EditCard  
 url={url} name="email" icon={websiteIcon}   button="N"
value={userdata?.user.email?userdata?.user.email:''}
/>

<EditCard  
url={url} name="phoneNumber"  title="Phone"
value={userdata?.user.phoneNumber?userdata?.user.phoneNumber:'Not Available'}
/>
<EditCard  
url={url} name="gender"  title="Gender"
value={userdata?.user.gender?userdata?.user.gender:'Not Available'}
/>
<EditCard  
url={url} name="dob"  title="DOB"
value={userdata?.user.age?userdata?.user.age:'Not Available'}
/>

<EditCard  
url={url} name="bio"  title="Bio"
value={userdata?.user.bio?userdata?.user.bio:'Not Available'}
/>



<Switch>

    
     <Route path={`${path}/firstName`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="firstName" type="text" title=" First Name " baseUrl={url}  onchange={inputGetValue} value={userdata?.user.firstName?userdata?.user.firstName:''}
 placeholder="firstName" />
 
 </form>
    </Route>
    <Route path={`${path}/lastName`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="lastName"  type="text" title=" Last Name " baseUrl={url}  onchange={inputGetValue} value={userdata?.user.lastName?userdata?.user.lastName:''}
 placeholder="lastName" />
 
 </form>
    </Route>
    
    <Route path={`${path}/phoneNumber`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="phoneNumber" type="number" title="Phone Number " baseUrl={url}  onchange={inputGetValue} value={userdata?.user.phoneNumber?userdata?.user.phoneNumber:''}
 placeholder="phoneNumber" />
 
 </form>
    </Route>
    <Route path={`${path}/gender`}>
    <form onSubmit={handleUpdate} >
 
 <div  className="login-signup-backgrop"><div  className="login-signup-card">
        <div  className="blank"> </div>
    <div  className="login-signup-card-outer">
 <div  className="login-signup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Update Gender </h1>
    <div class="input-card-outer">
                                    
                                    <div class="input-card-radio">
                                    <Checkbox name="gender" title=" Gender "   type="radio" onchange={inputGetValue} 
 value="Male"
 status={userdata?.user.gender==="Male"?true:false}
/><Checkbox name="gender" title=" Gender "  type="radio" onchange={inputGetValue} 
                                          value="Female"
                                          status={userdata?.user.gender==="Female"?true:false}
 /> 
    </div> </div>
   <div  className="login-input-card"><div  className="login-iconAdmin">
  </div><button  className="login-signup-button" type="submit"  id="update">Update</button>
  </div>
  <div  className="login-input-card"><div  className="login-iconAdmin">
  </div>
  <Link to={url}>
  <div className="login-signup-button closeButton" >close</div>
  </Link>
  </div></div>
   </div>
   
   </div>
	    
	</div></div>
</form>
    </Route>

    <Route path={`${path}/dob`}>
   <form onSubmit={handleUpdate} >
 
 <Calender name="age" title=" DOB " baseUrl={url}  onchange={inputGetValue} value={userdata?.user.age?userdata?.user.age:''}
 placeholder="DOB" />
 
 </form>
    </Route>
    <Route path={`${path}/bio`}>
   <form onSubmit={handleUpdate} >
 
 <TextArea name="bio" title=" Bio " baseUrl={url}  onchange={inputGetValue} value={userdata?.user.bio?userdata?.user.bio:''}
 placeholder="Bio" />
 
 </form>
    </Route>
</Switch>

    </>)
}
export default UserDetails;