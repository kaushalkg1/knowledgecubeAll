import React from "react";
import { useParams } from "react-router-dom";
const ShowCourse =() =>{
    const {courseId} = useParams();
return(
    <><div className="outer-profile content-top">
    <div className="outer-profile-in  ">
    <div className="outer-profile-title ">
    <div className="outer-all ">
    <div> <br></br> Course id
        {courseId}
        </div>    </div>
        </div>    </div></div>
    </> 
)
}

export default ShowCourse;