


import React,{useEffect,useState} from "react";
/*  import useSelector to fetch data from global  redux store  */
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { initMyCourses } from "../../../store/actions/initialization";

import { useRouteMatch,Switch, Route } from "react-router-dom";

  
import MyCoursesTopBar from "./MyCoursesTopBar";
import EditCourse from "./EditCourse";
import NotFound from "../../NoMatch/NotFound";

import LoadingCards from "../../Loading/LoadingCards";

import createIcon from "../../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";

import Card from "../../UI/Card";

import {Link } from "react-router-dom";
import CardSmall from "../../UI/CardSmall";

import loadable from '@loadable/component';
const ArrCards= [1,2,3,4,5,6,7,8,9];
let lazyLoad =   <LoadingCards cards={ArrCards} type="CourseCard"/>;
const MyCourseCard = loadable(() => import("../../UI/MyCourseCard"), {
  fallback: lazyLoad  });
const MyCourses = ({baseUrl})=>{
 
  const [statusLoading , setStatusLoading] = useState({status:true});
  const callLoader =()  =>{
    setStatusLoading({status:true})
    setTimeout(()=>{setStatusLoading({status:false})},1000)
 
  }
  const allCourses=(courses)=>{
   
    return courses;
        }
        const paidCourses=(courses)=>{ 
          return courses.payment==="Paid";
              }
      
   const freeCourses=(courses)=>{ 
    return courses.payment==="Free";
        }
        const publicCourses=(courses)=>{
          return courses.visibility==="Public";
              }
      
        const privateCourses=(courses)=>{ 
        
    return courses.visibility==="Private" 
 
         
          
              }
              const trashCourses=(courses)=>{ 
                return courses.trash==="Deleted";
                    }
            
  const {url} =useRouteMatch();

  const dispatch = useDispatch();

  const userdata = useSelector((state)=>state?.user?.user?.user);
  const data= {id:userdata.id,token:userdata.currentToken};
   useEffect(()=>{
     /* dispatch action here , first import actions from action folder and add them here   */
   
     dispatch(initMyCourses(data))
     setStatusLoading({status:true})
     setTimeout(()=>{setStatusLoading({status:false})},1000)
 
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[dispatch,MyCourseCard])
  
 
  const posts = useSelector((state)=>state?.courses?.mycourses);
  
  
  //  console.log(posts?.map((f)=>f.title ));
   const courses = posts?.map((f)=>f);
    return <>
   
<div className="outer-profile-title ">My Courses

</div><div className="outer-profile-subvals outer-profile-title ">
    {"Hey "+(userdata?.firstName?userdata?.firstName:" There! ")+" , Feel Free To Update Or Edit  Your Courses" }</div>
      
    
<MyCoursesTopBar  baseUrl={url}/>
<div className="courses-top-bar " > 

<Link   to={`${baseUrl}/create/createCourse`}>
<Card  icon={createIcon} alt="Create New " title="Create New"  />
</Link>
<div></div>
<Link  onClick={callLoader} to={`${url}/all`}>
<CardSmall   alt="All" title="All"  />
</Link><Link onClick={callLoader} to={`${url}/paid`}>
<CardSmall   alt="Paid" title="Paid"  />
</Link><Link onClick={callLoader} to={`${url}/free`}>
<CardSmall   alt="Free" title="Free"  />
</Link>
<Link onClick={callLoader} to={`${url}/public`}>
<CardSmall   alt="Public" title="Public"  />
</Link><Link onClick={callLoader} to={`${url}/private`}>
<CardSmall   alt="Private" title="Private"  />
</Link>
<Link onClick={callLoader} to={`${url}/trash`}>
<CardSmall   alt="Trash" title="Trash"  />
</Link>

</div>

{ statusLoading.status?<LoadingCards cards={ArrCards} type="CourseCard" />:
<>

<Switch>
<Route exact path={`${url}`}>
<h1> All Courses</h1>

{courses?.filter(allCourses)?.length?courses?.filter(allCourses)?.map((course) => (
       <MyCourseCard key={course?._id}baseUrl= {baseUrl}   course={course}/>
     )):<NotFound/>}

    </Route>
    
            

    <Route exact path={`${url}/all`}   >
<h1> All Courses</h1>
{courses?.filter(allCourses)?.length?courses?.filter(allCourses)?.map((course) => (
       <MyCourseCard key={course?._id} baseUrl= {baseUrl}  course={course}/>
     )):<NotFound/>}

    </Route>
    <Route path={`${url}/public`}>
<h1> Public Courses</h1>
{courses?.filter(publicCourses)?.length?courses?.filter(publicCourses)?.map((course) => (
     <MyCourseCard key={course?._id} baseUrl= {baseUrl}  course={course}/>
   )):<NotFound/>}

  </Route>
  <Route path={`${url}/private`}>
    
<h1> Private Courses</h1>
{

courses?.filter(privateCourses)?.length?courses?.filter(privateCourses)?.map((course) => (
     <MyCourseCard key={course?._id} baseUrl= {baseUrl}  course={course}/>
   )):<NotFound/>}

  </Route>
  <Route path={`${url}/paid`}>
<h1> Paid Courses</h1>
{

courses?.filter(paidCourses)?.length?courses?.filter(paidCourses)?.map((course) => (
     <MyCourseCard key={course?._id} baseUrl= {baseUrl}  course={course}/>
   )):<NotFound/>}

  </Route>
  <Route path={`${url}/free`}>
<h1> Free Courses</h1>
{

courses?.filter(freeCourses)?.length?courses?.filter(freeCourses)?.map((course) => (
     <MyCourseCard key={course?._id} baseUrl= {baseUrl}  course={course}/>
   )):<NotFound/>}

  </Route>
  <Route path={`${url}/trash`}>
<h1> Deleted Courses</h1>
{

courses?.filter(trashCourses)?.length? courses?.filter(trashCourses)?.map((course) => (
     <MyCourseCard key={course?._id} baseUrl= {baseUrl}   course={course}/>
   )):<NotFound/>
  
  }




  </Route>
    
    
<Route  path={`${url}/:courseEditId?`}>
<EditCourse/>
      </Route>

</Switch> 
     
</>
}  
    </>

}
export default MyCourses;
