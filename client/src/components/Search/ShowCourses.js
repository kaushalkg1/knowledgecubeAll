import React,{useEffect} from "react";
/*  import useSelector to fetch data from global  redux store  */
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { initCourses } from "../../store/actions/initialization";
import CourseCard from "../UI/CourseCard";


const ShowCourses = ()=>{
  /* initialize useSelector( (state)=>{ state.posts } ) as hook
  ( we use particular data from state as  state.posts from combinedReducer({posts}) ) */
 
  const dispatch = useDispatch();
   useEffect(()=>{
     /* dispatch action here , first import actions from action folder and add them here   */
   
     dispatch(initCourses())
     
   },[dispatch])
  
 
  const posts = useSelector((state)=>state?.courses?.courses);

   // console.log(posts.map((f)=>f.title));
    const courses = posts?.map((f)=>f);
    return <>
    
<div className="outer-all ">
<div className = {` outer-left `}  id="outer-left">
  
<div className="outer-left-inn">
       
      
      </div>
    
    
    </div>
    <div className="outer-right">
        <div className="content-topk">
          
        </div>
        {courses?.map((course) => (
        <CourseCard course={course}/>
       ))}
        </div>
        </div>
    </>

}
export default ShowCourses;
