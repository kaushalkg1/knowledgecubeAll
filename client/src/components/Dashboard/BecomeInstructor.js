import React ,{useState}from "react";
import { useSelector } from "react-redux";
import { updateUserData } from "../../store/actions/User";

import { useDispatch } from "react-redux";
import {Link, useRouteMatch,Switch, Route } from "react-router-dom";

import creatorImage from "../img/Become-Creator.gif";

import "./becomeCreator.css";
import '../UI/snackbar.css';
const BecomeInstructor =({baseUrl}) =>{

  const {url,path} =useRouteMatch();
  const dispatch = useDispatch();
  
    
  const userdata = useSelector((state)=>state?.user?.user?.user);
  const usertoken = useSelector((state)=>state?.user?.user);
  const [data, setData]= useState({field:'',title:'',value:'',id:userdata?.id?userdata?.id:'',token:usertoken?.token?usertoken?.token:''});
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
             setData({...data,field:"isCreator",title:"Creator", value:true});
        
   
    }
    return(<>
    <h3> Become Instructor </h3>
{ (showSnackBar.status && showSnackBar.show ) ?  <div id="snackbarUser" >
    You Are A Creator Now!!! Create New Courses. </div>: '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Some Error Occured. Please Try Again.</div> : '' }



<div className="outer-creator-img ">
 <img src={creatorImage} className="creator-img" alt="Become Creator"/>
 
<div className="align-btn-creator ">
<div className="creator-img-vals ">{userdata?.isCreator?" You Are A Creator . Feel Free To Create New Courses. "
:"You Are Not Instructor/Creator yet"}
 </div> 
 {userdata?.isCreator?
 <Link to={`${baseUrl}/create`}>
 <div className="editButton-creator-img" >Create Courses</div>
 </Link>
 
 :
<div  className="creator-img-subvals ">
<Link to={`${url}/request`}>
<div className="editButton-creator-img" onClick={e=>{setToggleInput({type:'isCreator',status:true})}}>Request To Become Instructor</div>
</Link>
</div>}


</div>

</div>
 


<Switch>

    
     <Route path={`${path}/request`}>
   <form onSubmit={handleUpdate} >
 
 <div  className="login-signup-backgrop"><div  className="login-signup-card">
        <div  className="blank"> </div>
    <div  className="login-signup-card-outer">
 <div  className="login-signup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Become Instructor / Creator. </h1>
    
   <div  className="login-input-card"><div  className="login-iconAdmin">
  </div><button  className="login-signup-button" type="submit" onClick={inputGetValue} id="update"> Make Me Creator !!! </button>
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
   
</Switch>

    </>)
}
export default BecomeInstructor;