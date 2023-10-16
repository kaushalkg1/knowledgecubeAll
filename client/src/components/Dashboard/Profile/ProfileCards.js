import React,{useState} from "react";


import createIcon from "../../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";


import { useSelector } from "react-redux";
import {Link, useRouteMatch } from "react-router-dom";
import LoadingCards from "../../Loading/LoadingCards";

import loadable from '@loadable/component';
const ArrCards= [1,2,3,4,5,6,7,8,9];
let lazyLoad =   <LoadingCards cards={ArrCards} type="ExtraSmallCard"/>;
const Card = loadable(() => import("../../UI/Card"), {
  fallback: lazyLoad  });
const ProfileCards=({baseUrl})=>{
  
 const [statusLoading , setStatusLoading] = useState({status:true});
    const {url} =useRouteMatch();
  
    const userdata = useSelector((state)=>state?.user?.user?.user);
    
setTimeout(()=>{setStatusLoading({status:false})},1000)
return(<>

{statusLoading.status?<LoadingCards cards={ArrCards} type="ExtraSmallCard" />:userdata?.isCreator?
 <Link to={`${baseUrl}/create/createCourse`}>
 <div className="editButtoncreatelink" >Create New Course</div>
 </Link>
 
 :<Link to={`${baseUrl}/become-instructor`} >
 <Card  icon={createIcon} alt="Become Instructor" title="Become Instructor"  >

  </Card>
 </Link> }
  
   <Link to={`${url}/user-details`} >
   <Card  icon={createIcon} alt="create" title="User Details"  >

    </Card>
   </Link> 

   <Link to={`${url}/social-profiles`} >
   <Card  icon={createIcon} alt="create" title="Social Profiles"  >

    </Card>
   </Link> 
   <Link to={`${url}/address`} >
   <Card  icon={createIcon} alt="create" title="Address"  >

    </Card>
   </Link> 
   <Link to={`${url}/education`} >
   <Card  icon={createIcon} alt="create" title="Education"  >

    </Card>
   </Link> 
   
   <Link to={`${url}/career-development`} >
   <Card  icon={createIcon} alt="create" title="Career Development"  >

    </Card>
   </Link> 
   
   <Link to={`${url}/my-skills`} >
   <Card  icon={createIcon} alt="create" title="My Skills"  >

    </Card>
   </Link> 
   
   <Link to={`${url}/current-job`} >
   <Card  icon={createIcon} alt="create" title="Current Job"  >

    </Card>
   </Link>  
   <Link to={`${url}/my-projects`} >
   <Card  icon={createIcon} alt="create" title="My Projects"  >

    </Card>
   </Link> 
 
   


</>)
}
export default ProfileCards