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

import iconProfile from "../../icons/add_a_photo_FILL0_wght200_GRAD0_opsz40.svg";
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

    
    
  const userdata = useSelector((state)=>state?.user?.user?.user);
  const usertoken = useSelector((state)=>state?.user?.user);
  const [data, setData]= useState({field:'',title:'j',value:'',id:userdata?.id?userdata?.id:'',token:usertoken?.token?usertoken?.token:''});
  const [togleInput,setToggleInput] = useState({type:'',status:false})
  const [showSnackBar , setSnackBar] = useState({status:false,show:false})
/* handle Login function  */
const handleUpdate=(e)=>{
    e.preventDefault();
  
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
  



 }).catch(error => {
   console.error(error);
 });

    setToggleInput({...togleInput,status:false})


}
const inputGetValue = 
    (e)=>
    {
             setData({...data,field:e.target.name,title:e.target.title, value:e.target.value});
        
   
    }
const Closeit = (e) =>setToggleInput({...togleInput,status:false});
    return(<>
    <h3> User Details </h3>
{ (showSnackBar.status && showSnackBar.show ) ?  <div id="snackbarUser" >{data.title} has been Changed to {data.value}.</div> : '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Couldn`t update {data.title} | Error Occured.</div> : '' }

<div className="outer-profile-photos  ">

<div style={{"position":"relative"}}><div style={{"position":"absolute","zIndex":"99"}}>
  <img style={profilePicCss}  src={userdata?.profilePhoto?userdata?.profilePhoto:profilePic} alt="profilePhoto"/>
  
  <Link to={`${url}/profilePhoto`}>
<div className="editProfile" onClick={e=>{setToggleInput({type:'profilePhoto',status:true})}}>
  <img src={iconProfile} style={{"background":"#fff","padding":"2px", "borderRadius":"50%"}} alt="iconProfile"/> </div>
</Link>
</div>
<img  style={coverPicCss} src={userdata?.coverPhoto?userdata?.coverPhoto:coverPic} alt="coverPhoto"/>
<Link to={`${url}/coverPhoto`}>
<div className="editCover" onClick={e=>{setToggleInput({type:'coverPhoto',status:true})}}>Edit Cover </div>
</Link>
</div>

</div>



<div className="outer-profile-name ">

<div className="outer-profile-vals ">First Name </div> 
<div className="outer-profile-subvals ">{userdata?.firstName?userdata?.firstName:"Please login to see First Name"}
<Link to={`${url}/firstName`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'firstName',status:true})}}>Edit</div>
</Link>
</div>


</div>

<div className="outer-profile-name ">

<div className="outer-profile-vals ">Last Name</div>
<div className="outer-profile-subvals ">{userdata?.lastName?userdata?.lastName:'Not Available'}
<Link to={`${url}/lastName`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'lastName',status:true})}}>Edit</div>
</Link>

</div>


</div>  
<div className="outer-profile-name ">

<div className="outer-profile-vals ">Email</div>
<div className="outer-profile-subvals ">{userdata?.email?userdata?.email:'Not Available'}

</div>

</div> 
<div className="outer-profile-name ">

<div className="outer-profile-vals ">Phone</div>
<div className="outer-profile-subvals ">{userdata?.phoneNumber?userdata?.phoneNumber:'Not Available'}
<Link to={`${url}/phoneNumber`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'phoneNumber',status:true})}}>Edit</div>
</Link></div>
</div> 
<div className="outer-profile-name ">

<div className="outer-profile-vals ">Gender</div>

<div className="outer-profile-subvals ">{userdata?.gender?userdata?.gender:'Not Available'}
<Link to={`${url}/gender`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'gender',status:true})}}>Edit</div>
</Link>
</div>
   

</div> 
<div className="outer-profile-name ">

<div className="outer-profile-vals ">DOB</div>
<div className="outer-profile-subvals ">{userdata?.age?userdata?.age:'Not Available'}
<Link to={`${url}/dob`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'dob',status:true})}}>Edit</div>
</Link>
</div>
</div> 

<div className="outer-profile-name ">

<div className="outer-profile-vals ">Bio</div>
<div className="outer-profile-subvals ">{userdata?.bio?userdata?.bio:'Not Available'}
<Link to={`${url}/bio`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'bio',status:true})}}>Edit</div>
</Link></div>
</div> 


<Switch>

    
     <Route path={`${path}/firstName`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="firstName" type="text" title=" First Name " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.firstName?userdata?.firstName:''}
 placeholder="firstName" />
 
 </form>
    </Route>
    <Route path={`${path}/lastName`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="lastName"  type="text" title=" Last Name " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.lastName?userdata?.lastName:''}
 placeholder="lastName" />
 
 </form>
    </Route>
    
    <Route path={`${path}/phoneNumber`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="phoneNumber" type="number" title="Phone Number " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.phoneNumber?userdata?.phoneNumber:''}
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
 status={userdata?.gender==="Male"?true:false}
/><Checkbox name="gender" title=" Gender "  type="radio" onchange={inputGetValue} 
                                          value="Female"
                                          status={userdata?.gender==="Female"?true:false}
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
 
 <Calender name="age" title=" DOB " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.age?userdata?.age:''}
 placeholder="DOB" />
 
 </form>
    </Route>
    <Route path={`${path}/bio`}>
   <form onSubmit={handleUpdate} >
 
 <TextArea name="bio" title=" Bio " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.bio?userdata?.bio:''}
 placeholder="Bio" />
 
 </form>
    </Route>
</Switch>

    </>)
}
export default UserDetails;