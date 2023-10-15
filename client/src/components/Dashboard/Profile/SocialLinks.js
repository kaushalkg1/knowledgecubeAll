import React ,{useState}from "react";
import { useSelector } from "react-redux";
import { updateUserData } from "../../../store/actions/User";
import "./Profile.css";
import { useDispatch } from "react-redux";
import {Link, useRouteMatch,Switch, Route } from "react-router-dom";

import Input from "../../UI/Input";
import facebookIcon from "../../img/facebook.png";
import twitterIcon from "../../img/twitter.png";
import linkedInIcon from "../../img/linkedin.png";
import websiteIcon from "../../img/chat.png";
import youtubeIcon from "../../img/youtube.png";
import instagramIcon from "../../img/instagram.png";
import githubIcon from "../../img/network.png";

import Loading from "../../Loading/Loading";
const SocialLinks =() =>{

  // const {category} = useParams();
  const {url,path} =useRouteMatch();
  const dispatch = useDispatch();

  const userdata = useSelector((state)=>state?.user?.user);
  //console.log(userdata)
  const [data, setData]= useState({field:'',title:'',value:'',id:userdata?.user?.id?userdata?.user?.id:'',token:userdata?.token?userdata?.token:''});
  const [togleInput,setToggleInput] = useState({type:'',status:false})
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
   //console.error(error);
   setSnackBar({status:false,show:true});
   setLoader({status:false});

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
    <h3> Social Links </h3>
    
{<Loading Load={loader?.status}/>}
{ (showSnackBar.status && showSnackBar.show ) ?  
<div id="snackbarUser" >{data.title}  has been Changed to {data.value}.</div> : '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Couldn`t update {data.title}  | Error Occured.</div> : '' }

  
<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={facebookIcon}  alt="facebookIcon"/> </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.facebook?userdata?.user?.socialProfile?.facebook:''}
<Link to={`${url}/facebook`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'facebook',status:true})}}>Edit</div>
</Link>
</div>


</div>

<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={twitterIcon}  alt="twitter Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.twitter?userdata?.user?.socialProfile?.twitter:''}
<Link to={`${url}/twitter`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'twitter',status:true})}}>Edit</div>
</Link>
</div>


</div>

<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={linkedInIcon}  alt="linkedIn Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.linkedIn?userdata?.user?.socialProfile?.linkedIn:''}
<Link to={`${url}/linkedIn`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'linkedIn',status:true})}}>Edit</div>
</Link>
</div>


</div>

<div className="outer-profile-name ">

<div className="outer-profile-vals "><img className="socialIcons" src={githubIcon}  alt="github Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.github?userdata?.user?.socialProfile?.github:''}
<Link to={`${url}/github`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'github',status:true})}}>Edit</div>
</Link>
</div>


</div>


<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={youtubeIcon}  alt="youtube Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.youtube?userdata?.user?.socialProfile?.youtube:''}
<Link to={`${url}/youtube`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'youtube',status:true})}}>Edit</div>
</Link>
</div>


</div>

<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={instagramIcon}  alt=" Instagram Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.instagram?userdata?.user?.socialProfile?.instagram:''}
<Link to={`${url}/instagram`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'instagram',status:true})}}>Edit</div>
</Link>
</div>


</div>


<div className="outer-profile-name ">

<div className="outer-profile-vals "> <img className="socialIcons" src={websiteIcon}  alt="website Icon"/>  </div> 
<div className="outer-profile-subvals ">{userdata?.user?.socialProfile?.website?userdata?.user?.socialProfile?.website:''}
<Link to={`${url}/website`}>
<div className="editButton" onClick={e=>{setToggleInput({type:'website',status:true})}}>Edit</div>
</Link>
</div>


</div>

<Switch>

<Route path={`${path}/facebook`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="facebook" type="text" title=" Facebook Link" baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.facebook?userdata?.user?.socialProfile?.facebook:''}
 placeholder="Add Facebook Link" />
 
 </form>
    </Route>
    <Route path={`${path}/twitter`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="twitter" type="text" title=" Twitter Link " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.twitter?userdata?.user?.socialProfile?.twitter:''}
 placeholder="Add Twitter Link" />
 
 </form>
    </Route>
    <Route path={`${path}/linkedIn`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="linkedIn" type="text" title=" LinkedIn  Link" baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.linkedIn?userdata?.user?.socialProfile?.linkedIn:''}
 placeholder="Add LinkedIn Link" />
 
 </form>
    </Route>
    <Route path={`${path}/github`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="github" type="text" title=" Github Link " baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.github?userdata?.user?.socialProfile?.github:''}
 placeholder="Add Github Link" />
 
 </form>
    </Route>
    <Route path={`${path}/website`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="website" type="text" title=" Website  Link" baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.website?userdata?.user?.socialProfile?.website:''}
 placeholder="Add Website Link" />
 
 </form>
    </Route>
    <Route path={`${path}/youtube`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="youtube" type="text" title=" Youtube  Link" baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.youtube?userdata?.user?.socialProfile?.youtube:''}
 placeholder="Add Youtube Link" />
 
 </form>
    </Route>
    <Route path={`${path}/instagram`}>
   <form onSubmit={handleUpdate} >
 
 <Input name="instagram" type="text" title=" Instagram  Link" baseUrl={url} onclose={Closeit} onchange={inputGetValue} value={userdata?.user?.socialProfile?.instagram?userdata?.user?.socialProfile?.instagram:''}
 placeholder="Add Instagram Link" />
 
 </form>
    </Route>
    
    
</Switch>

    </>)
}
export default SocialLinks;