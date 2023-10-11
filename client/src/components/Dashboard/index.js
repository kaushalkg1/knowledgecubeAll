import React,{useState,useEffect} from "react";
/*  import useSelector to fetch data from global  redux store  */
import Profile from "./Profile/Profile";
import MyCourses from "./MyCourses/MyCourses/MyCourses";
import CreateCourses from "./CreateCourse/CourseDashBoard";

//import KnowledgeCube from "../img/knowledgecube.gif";
import closeIcon from "../icons/close_FILL0_wght200_GRAD-25_opsz40.svg";
import createIcon from "../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";
import profileIcon from "../icons/person_add_FILL0_wght200_GRAD0_opsz40.svg";
import myCoursesIcon from "../icons/bookmark_manager_FILL0_wght200_GRAD0_opsz40.svg";
import myEnrollmentsIcon from "../icons/store_FILL0_wght200_GRAD0_opsz40.svg";
import MyEnrollments from "./MyEnrollment/MyEnrollments";
import myDashboard from "../icons/castle_FILL0_wght200_GRAD-25_opsz40.svg";
import myWishlist from "../icons/add_a_photo_FILL0_wght200_GRAD0_opsz40.svg";
import leftOpen from "../icons/fullscreen_FILL0_wght200_GRAD0_opsz40.svg";
//import { useSelector } from "react-redux";
  import {Link, useRouteMatch,Switch, Route } from "react-router-dom";
import BecomeInstructor from "./BecomeInstructor";

import { useSelector } from "react-redux";
import SkillReport from "./SkillReport/SkillReport";
import StudyPlan from "./StudyPlan/StudyPlan";

  
 const Dashboard = ()=>{
    const userdata = useSelector((state)=>state?.user?.user?.user);
    const {url}=useRouteMatch();
    const [activePart , setActivePart]=useState("profile");
    const [open , setOpen]=useState(false);
   // const userdata = useSelector((state)=>state?.user?.user?.user);

  useEffect(() => {
    setOpen(false) 
  }, [activePart]);
 
  


    return <>

<div className="outer-all ">
<div className = {` outer-left ${open?"outer-left-style":"outer-right-style"} `}  id="outer-left">
  
<div className="outer-left-inn">
       
{
              open?
              <div className="outer-left-close" onClick={()=>setOpen(false)}><img src={closeIcon} alt="left-close" /></div>
                :
            <div className="top-title   item-card outer-left-open" onClick={()=>setOpen(true)}>
                            <img src={leftOpen} alt="left Open"/></div>
              }
              
 
<div  style={{"height":"50px"}}>
            
        </div>
        <Link to={`/dashboard`}>
<div  className={`item-card  add-cursor  ${activePart==="dashboard"?"active":""}`} onClick={()=>setActivePart("dashboard")}>
            <div  className="item-icon">
                <img src={myDashboard} alt="My Courses"/>
                
            </div>
            <div  className="item-text">
             Dashboard
            </div>
        </div>
       </Link>
       <Link to={`${url}/profile`}>
        <div  className={`item-card  add-cursor  ${activePart==="profile"?"active":""}`} onClick={()=>setActivePart("profile")}>
            <div  className="item-icon">
                <img src={profileIcon} alt="Profile Icon "/>
              
            </div>
            <div  className="item-text">
            Profile
            </div>
        </div>
       </Link>{userdata?.isCreator?
        <Link to={`${url}/create/createCourse`}>
<div  className={`item-card  add-cursor  ${activePart==='createCourses'?'active':''}`} onClick={()=>setActivePart("createCourses")}>
            <div  className="item-icon  ">
              <img src={createIcon} alt="create"/>
            </div>
            <div  className="item-text ">
             Create 
            </div>
        </div>
</Link>:""}

        
{userdata?.isCreator?
        
     
        <Link to={`${url}/my-courses`}>
      
        <div  className={`item-card  add-cursor  ${activePart==="myCourses"?"active":""}`} onClick={()=>setActivePart("myCourses")}>
            <div  className="item-icon">
                <img src={myCoursesIcon} alt="My Courses"/>
                
            </div>
            <div  className="item-text">
             My Courses
            </div>
        </div>
       </Link>
       :""}
      <Link to={`${url}/enrolments`}>
        <div  className={`item-card  add-cursor  ${activePart==="myEnrollments"?"active":""}`} onClick={()=>setActivePart("myEnrollments")}>
            <div  className="item-icon">
                <img src={myEnrollmentsIcon} alt="My Courses"/>
                
            </div>
            <div  className="item-text">
             My Enrollments
            </div>
        </div></Link>
        <Link to={`${url}/study-plan`}>
      
      <div  className={`item-card  add-cursor  ${activePart==="study-plan"?"active":""}`} onClick={()=>setActivePart("study-plan")}>
          <div  className="item-icon">
              <img src={myWishlist} alt="My Courses"/>
              
          </div>
          <div  className="item-text">
           Study Plan
          </div>
      </div></Link>
        <Link to={`${url}/skill-report`}>
      
        <div  className={`item-card  add-cursor  ${activePart==="skill-report"?"active":""}`} onClick={()=>setActivePart("skill-report")}>
            <div  className="item-icon">
                <img src={myWishlist} alt="My Courses"/>
                
            </div>
            <div  className="item-text">
             Skill Report
            </div>
        </div></Link>
       
    </div>
    
    
    </div>
    <div className="outer-right">
        <div className="content-topk">
              <div className="">
             
        
        
                
                {
              open?
              <div className="outer-left-close" onClick={()=>setOpen(false)}><img src={closeIcon} alt="left-close" /></div>
                :
            <div className=" outer-left-open" onClick={()=>setOpen(true)}>
                            <img src={leftOpen} alt="left Open"/></div>
              }
             </div>
           </div> 

    








<Switch>
    <Route exact path={`${url}/`}>
<div> Dashboard</div>
    </Route>
<Route path={`${url}/profile`}>
    
<Profile baseUrl={url}/>
</Route>
<Route path={`${url}/become-instructor`}>
    
<BecomeInstructor baseUrl={url}/>
</Route>
<Route path={`${url}/enrolments`}>
    
  <div> Enrollments </div>
  <MyEnrollments/>
    </Route><Route path={`${url}/skill-report`}>
    
    <div> Skill Report </div>
    <SkillReport/>
      </Route>
      <Route path={`${url}/study-plan`}>
    
    <div> Study Plan </div>
    <StudyPlan/> 
      </Route>
    <Route path={`${url}/create`}>
    <CreateCourses  baseUrl={url} />
    </Route>
    <Route path={`${url}/my-courses`}>
    <MyCourses baseUrl={url} />
     </Route>
     

     
</Switch>
       
        

       
       
            
                
                <div className="content-bottom">

        </div>
    </div>
</div>

   
    </>

}
export default Dashboard;
