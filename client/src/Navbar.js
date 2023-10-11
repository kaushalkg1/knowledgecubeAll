import React from "react";


import createIcon from "./components/icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";

import profileIcon from "./components/icons/person_add_FILL0_wght200_GRAD0_opsz40.svg";
import myCoursesIcon from "./components/icons/bookmark_manager_FILL0_wght200_GRAD0_opsz40.svg";
import myEnrollmentsIcon from "./components/icons/store_FILL0_wght200_GRAD0_opsz40.svg";
import myDashboard from "./components/icons/castle_FILL0_wght200_GRAD-25_opsz40.svg";
import myWishlist from "./components/icons/add_a_photo_FILL0_wght200_GRAD0_opsz40.svg";
import Logout from "./components/Logout";
import CardNav from "./components/UI/CardNav";

import { useSelector } from "react-redux";
   
// import { useSelector } from "react-redux";

import {Link } from "react-router-dom";
const Navber=()=>{
    const localToken= JSON.parse(localStorage.getItem("profile"))?.data?.user?.currentToken;
    const token = useSelector((state)=>state?.user?.user?.user?.currentToken);
  
     const userdata = useSelector((state)=>state?.user?.user?.user);
    return (<>


{(token===localToken&&token&&localToken)?<>
    <Link   to="/dashboard/profile">
    <CardNav  icon={profileIcon} alt="User" title={userdata?.firstName?("Hey "+userdata?.firstName+" !!! "):"Hey User !!!"}  >
</CardNav>
</Link> 
  
  {userdata?.isCreator?
<>
  
 <Link to={`/dashboard/create/createCourse`}>
 <CardNav  icon={createIcon} alt="Create Course" title="Create Course"  >
</CardNav>
 </Link>
 </>
 :
<Link to={`/dashboard/become-instructor`} >
 <CardNav  icon={createIcon} alt="Become Instructor" title="Become Instructor"  >

  </CardNav>
  
  </Link>}
<Link   to="/dashboard">
<CardNav  icon={myDashboard} alt="Dashboard" title="Dashboard"  >

</CardNav>
</Link>

<Link to={`/dashboard/my-courses`}>
<CardNav  icon={myCoursesIcon} alt="My Courses" title="My Courses"  >

</CardNav>

</Link>

<Link to={`/dashboard/enrolments`}>
<CardNav  icon={myEnrollmentsIcon} alt="My Enrollments" title="My Enrollments"  >

</CardNav>
</Link>
<Link to={`/dashboard/study-plan`}>
<CardNav  icon={myWishlist} alt="Study Plan" title="Study Plan"  >

</CardNav>
</Link>
<Link to={`/dashboard/skill-report`}>
<CardNav  icon={myDashboard} alt="Skill Report" title="Skill Report"  >

</CardNav>
</Link>

<Link to={`/dashboard/profile/user-details`}>
<CardNav  icon={profileIcon} alt="settings" title="Settings"  >

</CardNav>
</Link>





<Logout/>
</>:<> <CardNav  icon={profileIcon} alt="User" title={"Hey User !!!"}  >
</CardNav>
<Link   to="/courses">
<CardNav  icon={myDashboard} alt="Courses" title="Courses"  >

</CardNav>
</Link>

<Link    to="/login">
<CardNav  icon={createIcon} alt="Login" title="Login"  >

</CardNav>

</Link>
<Link    to="/signup">
<CardNav  icon={createIcon} alt="Profile Icon" title="Signup"  >

</CardNav>

</Link>

</>}



</>)
}
export default Navber;