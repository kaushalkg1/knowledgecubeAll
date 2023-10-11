


import React,{useEffect} from "react";
/*  import useSelector to fetch data from global  redux store  */
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { initMyCourses } from "../../../../store/actions/initialization";
import MyCourseCard from "../../../UI/MyCourseCard";
import createIcon from "../../../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";

import {Link, useRouteMatch,Switch, Route } from "react-router-dom";
import Card from "../../../UI/Card";


const MyCourses = ({baseUrl})=>{
 
    
    const {url,path} =useRouteMatch();

  const dispatch = useDispatch();

  const userdata = useSelector((state)=>state?.user?.user?.user);
  const data= {id:userdata.id,token:userdata.currentToken};
   useEffect(()=>{
     /* dispatch action here , first import actions from action folder and add them here   */
   
     dispatch(initMyCourses(data))
     
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[dispatch])
  
 
  const posts = useSelector((state)=>state?.courses?.mycourses);

  
   // console.log(posts.map((f)=>f.title));
    const courses = posts?.map((f)=>f);
    return <>
   
<div className="outer-profile-title ">My Courses

</div><div className="outer-profile-subvals outer-profile-title ">
    {"Hey "+(userdata?.firstName?userdata?.firstName:" There! ")+" , Feel Free To Update Or Edit  Your Courses" }</div>
      
    
<Switch>
<Route exact path={`${url}/`}>
{courses?.map((course) => (
       <MyCourseCard key={course?._id}  course={course}/>
     ))}

<div className="outer-profile-title ">
{courses?.length===0?<>
    <div className="outer-profile-title ">  You Have Not Created Any Course Yet. 

</div><Link to={`${baseUrl}/create`} >
   
     <Card  icon={createIcon} alt="create" title="Create New Courses"  />
   </Link> </>
:
""}
</div>
    </Route>
   
    <Route  path={`${path}`}>

    <>
   <Link to={`${url}`} >
   
     <Card  icon={createIcon} alt="create" title="Back"  />
   </Link> </>
</Route>
    


</Switch> 
       
    </>

}
export default MyCourses;
