import React from "react";
import { useSelector } from "react-redux";

import {Link, useRouteMatch } from "react-router-dom";
import CourseIcon from "../img/coverPic.gif";
import Icon from "../icons/castle_FILL0_wght200_GRAD-25_opsz40.svg";

import UserImg from "../img/userImg.gif";
const MyCourseCard = ({course}) =>{
    
    const {url} =useRouteMatch();
  const userdata = useSelector((state)=>state?.user?.user?.user);
return(<><div className="course-card ">
<div className="course-status">{course?.filter}</div>
<div className="course-badge">{course?.status}</div>

<img src={CourseIcon} className="course-img" alt="Course"/>
              <div className="create-card-icon">
              <img src={Icon}  alt="Icon"/>

                     </div> <div className="create-card-text">
                  <div className="create-card-title"> {course?.title} 
                 
               
                  </div> 
                  <div className="create-card-description">
            {course?.description}
                  </div> 
              </div> 
              
              <div  className=" item-card  add-cursor" >
          <div  className="item-icon">
          <img src={UserImg}  style={{ "width":"50px","height":"50px","borderRadius":"50%"}}alt="User"/> 
         </div>
          <div  className="item-text">
         By {course?.author?.firstName}
          </div>
      </div>
              
             <div className="course-tabs-outer">
             <div className="course-tabs">Language: {course?.language}</div>   <div className="course-tabs">{course?.payment}</div> 
             </div>
             <div className="course-bottom">
            
<Link to={`/courses/${course?._id}`}>
<div className="course-btn-white">
              Go To Course
              </div>
              </Link> 
              {course.author.currentToken===userdata.currentToken?
                 

<Link to={`${url}/${course._id}`}> <div className="course-btn-green">
             Edit
              </div> </Link> :""}
             </div>
             
              </div>




</>)
}
export default MyCourseCard;