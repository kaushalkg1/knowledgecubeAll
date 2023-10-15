import React,{useEffect} from "react";

import {  useDispatch } from "react-redux";
import { initCourses } from "../../store/actions/initialization";

import { Switch, Route  } from "react-router-dom";
import ShowUser from "./ShowUser";
import ShowCourses from "./ShowCourses";
import ShowCourse from "./ShowCourse";

const Search = ()=>{
  

  /* initialize useSelector( (state)=>{ state.posts } ) as hook
  ( we use particular data from state as  state.posts from combinedReducer({posts}) ) */
 
  const dispatch = useDispatch();
   useEffect(()=>{
     /* dispatch action here , first import actions from action folder and add them here   */
   
     dispatch(initCourses())
     
   },[dispatch])
  
   // console.log(posts.map((f)=>f.title));
      return <>
    

       
     
       
       
<Switch> 
            
<Route exact  path={`/search/courses`}>
<ShowCourses/>
      </Route>
<Route  path={`/search/user/:userId`}>
<ShowUser/>
      </Route>
      <Route  path={`/search/courses/:courseId`}>
<ShowCourse/>
      </Route>
        </Switch>
       
    </>

}
export default Search;
