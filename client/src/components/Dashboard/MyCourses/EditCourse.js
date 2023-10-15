import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
   
const EditCourse =() =>{
        const mycourses = useSelector((state)=>state?.courses?.mycourses);
    const {courseEditId} = useParams();
    const courses = mycourses?.map((f)=>f);
    
    
   const currentCourse=(courses)=>{
    return courses._id===courseEditId;
        }
return(
    <><div className="outer-profile content-top">
    <div className="outer-profile-in  ">
    <div className="outer-profile-title ">
    <div className="outer-all ">
    <div> <br></br> course Edit id
        {courses[0]._id}
        {  courses?.filter(currentCourse)?.length?courses?.filter(currentCourse)?.map((course) => (
            
 course.title  

        )):""}
        </div>    </div>
        </div>    </div></div>
    </> 
)
}

export default EditCourse;