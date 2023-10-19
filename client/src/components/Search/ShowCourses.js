import React,{useEffect } from "react";
/*  import useSelector to fetch data from global  redux store  */
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { initCourses } from "../../store/actions/initialization";

import { Switch, Route } from "react-router-dom";
import ShowUser from "./ShowUser";

import loadable from '@loadable/component';

import LoadingCards from "../Loading/LoadingCards";
import Carousel from "../UI/Carousel";
const ArrCards= [1,2,3,4,5,6,7,8,9]
let lazyLoad =   <LoadingCards cards={ArrCards} type="CourseCard"/>;

const CourseCard = loadable(() => import("../UI/CourseCard"), {
  fallback: lazyLoad  });
const ShowCourses = ()=>{

  /* initialize useSelector( (state)=>{ state.posts } ) as hook
  ( we use particular data from state as  state.posts from combinedReducer({posts}) ) */
 
  const dispatch = useDispatch();
   useEffect(()=>{
     /* dispatch action here , first import actions from action folder and add them here   */
   
   dispatch(initCourses())
   
   },[dispatch])
  
   const posts = useSelector((state)=>state?.courses?.courses);
//  console.log(coursedata)
//  console.log(posts)

   // console.log(posts.map((f)=>f.title));
    const courses = posts?.map((f)=>f);
   // console.log(courses)
    return <>
      
      
            
             
<div className="outer-container "> <div className="content-topk">
          
          </div>   <div className="content-topk">
          
          </div> 
          <div className="outer-all-card-white">
<h1>  Courses</h1>
<div className="grid-10auto"><div></div>
<div>
        {courses?.map((course) => (
         
      <>  

<CourseCard course={course}/>
        
</>   
       )) }</div></div>
 </div>   </div> 
<div className="outer-container ">
          <div className="outer-all-card-white">
<h1>  Courses</h1>
    <Carousel  type="CourseCard" itemValue={courses}/>
    </div>   </div> 
<Switch> 
            
<Route  path={`/search/user/:userId`}>
<ShowUser/>
      </Route>
        </Switch>
       
      
    </>

}
export default ShowCourses;
