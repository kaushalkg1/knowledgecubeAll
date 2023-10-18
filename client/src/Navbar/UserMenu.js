import React,{useState} from "react";


import createIcon from "../components/icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";

import profileIcon from "../components/icons/person_add_FILL0_wght200_GRAD0_opsz40.svg";
import myCoursesIcon from "../components/icons/bookmark_manager_FILL0_wght200_GRAD0_opsz40.svg";
import myEnrollmentsIcon from "../components/icons/store_FILL0_wght200_GRAD0_opsz40.svg";
import myDashboard from "../components/icons/castle_FILL0_wght200_GRAD-25_opsz40.svg";
import myWishlist from "../components/icons/add_a_photo_FILL0_wght200_GRAD0_opsz40.svg";
import Logout from "../components/Logout";

import { useSelector } from "react-redux";
   
// import { useSelector } from "react-redux";

import {Link } from "react-router-dom";

import LoadingCards from "../components/Loading/LoadingCards";

import loadable from '@loadable/component';
const ArrCards= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let lazyLoad =   <LoadingCards cards={ArrCards} type="ExtraSmallCard"/>;
const CardNav = loadable(() => import("../components/UI/CardNav"), {
  fallback: lazyLoad  });
const Navber=()=>{

  
 const [statusLoading , setStatusLoading] = useState({status:true});
    const localToken= JSON.parse(localStorage.getItem("profile"))?.data?.user?.currentToken;
    const token = useSelector((state)=>state?.user?.user?.user?.currentToken);
  
setTimeout(()=>{setStatusLoading({status:false})},1000)
     const userdata = useSelector((state)=>state?.user?.user?.user);
    return (<>



{statusLoading.status?<LoadingCards cards={ArrCards} type="ExtraSmallCard" />:(token===localToken&&token&&localToken)?<>
    <Link   to="/dashboard/profile">
    <CardNav  icon={profileIcon} alt="User" title={userdata?.firstName?("Hey "+userdata?.firstName+" !!! "):"Hey User !!!"}  >
</CardNav>
</Link> 
<Link   to="/dashboard">
<CardNav  icon={myDashboard} alt="Dashboard" title="Dashboard"  >

</CardNav>
</Link>
  {userdata?.isCreator?
<>
  
  
<Link to={`/dashboard/create`}>
 <CardNav  icon={createIcon} alt="Create" title="Create"  >
</CardNav>
 </Link>
 <Link to={`/dashboard/teach`} >
 <CardNav  icon={createIcon} alt="Teach" title="Teach"  >

  </CardNav>
  
  </Link>
 <Link to={`/dashboard/my-courses`}>
<CardNav  icon={myCoursesIcon} alt="My Courses" title="My Courses"  >

</CardNav>

</Link>

  <Link to={`/dashboard/my-students`} >
 <CardNav  icon={myCoursesIcon} alt="My Students" title="My Students"  >

  </CardNav>
  
  </Link>

 

  <Link to={`/dashboard/my-blogs`} >
 <CardNav  icon={myCoursesIcon} alt="My Blogs" title="My Blogs"  >

  </CardNav>
  
  </Link>



  <Link to={`/dashboard/my-sales`} >
 <CardNav  icon={myCoursesIcon} alt="My Sales" title="My Sales"  >

  </CardNav>
  
  </Link>

  <Link to={`/dashboard/my-insights`} >
 <CardNav  icon={myCoursesIcon} alt="My Insights" title="My Insights"  >

  </CardNav>
  
  </Link>

 </>
 :
<Link to={`/dashboard/become-instructor`} >
 <CardNav  icon={createIcon} alt="Become Instructor" title="Become Instructor"  >

  </CardNav>
  
  </Link>}


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

<Link to={`/dashboard/my-purchases`}>
<CardNav  icon={profileIcon} alt="Purchases" title=" My Purchases"  >

</CardNav>
</Link>

<Link to={`/dashboard/profile/user-details`}>
<CardNav  icon={profileIcon} alt="settings" title="Settings"  >

</CardNav>
</Link>

<Link to={`/dashboard/cart`}>
<CardNav  icon={profileIcon} alt="cart" title="My Cart"  >

</CardNav>
</Link>

<Link to={`/dashboard/wishlist`}>
<CardNav  icon={profileIcon} alt="wishlist" title="My Wishlist"  >

</CardNav>
</Link>


<CardNav  icon={profileIcon} alt="Dark Mode" title="Dark Mode"  >

</CardNav>




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