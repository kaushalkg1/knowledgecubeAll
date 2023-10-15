import React,{useState,useEffect} from "react";
/*  import useSelector to fetch data from global  redux store  */

//import KnowledgeCube from "../img/knowledgecube.gif";
import closeIcon from "../icons/close_FILL0_wght200_GRAD-25_opsz40.svg";

import leftOpen from "../icons/fullscreen_FILL0_wght200_GRAD0_opsz40.svg";
//import { useSelector } from "react-redux";
  import { useRouteMatch,Switch, Route } from "react-router-dom";

  
import Loading from "../Loading/Loading"; 

import loadable from '@loadable/component';
// npm i @loadable/component 
let lazyLoad =   <Loading/>;
  ;const Profile = loadable(() => import("./Profile/Profile"), {
    fallback: lazyLoad  });
  const MyCourses = loadable(() => import("./MyCourses/MyCourses"), {
    fallback: lazyLoad  });
  const CreateCourses = loadable(() => import("./Create/Create"), {
    fallback: lazyLoad  });
    
const MyEnrollments = loadable(() => import("./MyEnrollment/MyEnrollments"), {
  fallback: lazyLoad  });

  const BecomeInstructor = loadable(() => import("./BecomeInstructor"), {
    fallback: lazyLoad  });

const SkillReport = loadable(() => import("./SkillReport/SkillReport"), {
  fallback: lazyLoad  });
const StudyPlan = loadable(() => import("./StudyPlan/StudyPlan"), {
  fallback: lazyLoad  });
const Navber = loadable(() => import("../../Navbar/UserMenu"), {
  fallback: lazyLoad  });

  
 const Dashboard = ()=>{
      const {url}=useRouteMatch();
      const [open , setOpen]=useState(false);
   // const userdata = useSelector((state)=>state?.user?.user?.user);

  useEffect(() => {
    setOpen(false) 
  }, []);
 
  


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
       <Navber/>
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
    <MyCourses baseUrl={url} type="all" />
     </Route>
     

     
</Switch>
       
        

       
       
            
                
                <div className="content-bottom">

        </div>
    </div>
</div>

   
    </>

}
export default Dashboard;
