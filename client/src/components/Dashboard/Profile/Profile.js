import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import ProfileCards from "./ProfileCards";

import UserDetails from "./UserDetails";

import { useRouteMatch,Switch, Route } from "react-router-dom";
import SocialLinks from "./SocialLinks";
 const Profile = ({baseUrl})=>{
    // const {category} = useParams();
   const {url,path} =useRouteMatch();
    
    
  const userdata = useSelector((state)=>state?.user?.user?.user);
       return <>
 
<div className="outer-profile content-top">
<div className="outer-profile-in  ">
<div className="outer-profile-title ">My Profile {path.substring(path.lastIndexOf("/")+1)}

</div><div className="outer-profile-subvals outer-profile-title ">
    {"Hey "+(userdata?.firstName?userdata?.firstName:" There! ")+" Welcome to KnowledgeCube" }</div>
    <Switch>
    <Route exact path={url}>

        <div className="gridCardProfile">
  
        <ProfileCards  baseUrl={baseUrl}/>
    

  
   </div>

         </Route>
        <Route path={`${url}/user-details`}>

        <UserDetails/>
        
        </Route>
        <Route path={`${url}/social-profiles`}>
<SocialLinks/>

</Route>
    </Switch>

</div>
<div  className=" profile-outer-right" >
     <ProfileCards baseUrl={baseUrl}/>
        
     </div>
     </div>
    </>

}
export default Profile;