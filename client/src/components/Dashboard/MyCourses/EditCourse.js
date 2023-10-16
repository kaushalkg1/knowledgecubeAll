import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMyCourse } from "../../../store/actions/FetchMyCourse";
import Loading from "../../Loading/Loading";

import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import {  useDispatch } from "react-redux";
import { addToMyCourses } from "../../../store/actions/initialization";
const EditCourse =() =>{
          const {courseEditId} = useParams();
          
    const history = useHistory();
  const dispatch = useDispatch();
 const [loader , setLoader] =useState({status:true});
const [courseData , setCourseData] = useState({data:''})
    const userdata = useSelector((state)=>state?.user?.user?.user);
    const data= {id:userdata.id,courseid:courseEditId,token:userdata.currentToken};
      useEffect(()=>{
        /* calling a function  along with course id & user token  
         for validating user and getting his course details using api request */
        getMyCourse(data).then(response => {
           
        // console.log(response);
        /* setting fetched course data in a state   */
         
         
  setTimeout(function(){setLoader({status:false}); }, 1000);
  /* set courses and course data when my course id exists for a user if it does not exist or if someone tries to 
  use others course id - logout .   */
  response.data.course?setCourseData({data:response.data.course}):dispatch({type:"LOGOUT"});
  response.data.course?dispatch(addToMyCourses(response.data.posts)):history.push('/login');
  
   console.log(response.data.course)
           }).catch(error => {
            // console.error(error);
            ;
            
           });; 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[courseEditId])
 
 
return(
    <>
    
{<Loading Load={loader?.status}/>}
<div className="outer-profile content-top">
    <div className="outer-profile-in  ">
    <div className="outer-profile-title ">
    <div className="outer-all outer-profile-name">
    
<div className="outer-profile-vals ">Title </div>   <div className=" ">

<div className="outer-profile-subvals ">{courseData?.data?.title?courseData?.data?.title:""}

<div className="editButton" onClick={e=>""}>Edit</div>

</div>


</div>   </div>

<div className="outer-all outer-profile-name">
    
<div className="outer-profile-vals "> Description </div>   <div className=" ">

<div className="outer-profile-subvals ">{courseData?.data?.description?courseData?.data?.description:""}

<div className="editButton" onClick={e=>""}>Edit</div>

</div>


</div>   </div>
        </div>    </div></div>
     course Edit id
        {courseData?.data?.title}
        
        
    </> 
)
}

export default EditCourse;