import React from "react";

import closeIcon from "../../icons/close_FILL0_wght200_GRAD-25_opsz40.svg";
import createIcon from "../../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";

import {  Link } from "react-router-dom";

import loadable from '@loadable/component';
import LoadingCards from "../../Loading/LoadingCards";
const ArrCards= [1,2,3,4,5,6,7,8,9];
let lazyLoad =   <LoadingCards cards={ArrCards} type="ExtraSmallCard"/>;

const  Card  = loadable(() => import("../../UI/Card"), {
  fallback: lazyLoad  });
const CreateCourseItemLinks =({url,courseData})=>{

    return(<>
    
   
<Link to={`${url}/addCategory`} >
   <Card  icon={createIcon} alt="Category" title="Add Categories"  >

    </Card>
   </Link> 

<Link to={`${url}/addSub-course`} >
   <Card  icon={createIcon} alt="Sub Course" title="Add Sub Course"  >

    </Card>
   </Link> 


   <Link to={`${url}/addMilestone`} >
   <Card  icon={createIcon} alt="MileStone" title="Add MileStone"  >

    </Card>
   </Link> 

   <Link to={`${url}/addModules`} >
   <Card  icon={createIcon} alt="Modules" title="Add Modules"  >

    </Card>
   </Link> 

   <Link to={`${url}/addWeeks`} >
   <Card  icon={createIcon} alt="Weeks" title="Add Weeks"  >

    </Card>
   </Link> 

   <Link to={`${url}/addTopics`} >
   <Card  icon={createIcon} alt="Topics" title="Add Topics"  >

    </Card>
   </Link> 

   <Link to={`${url}/addLesson`} >
   <Card  icon={createIcon} alt="Lesson" title="Add Lesson"  >

    </Card>
   </Link> 

   <Link to={`${url}/addQuiz`} >
   <Card  icon={createIcon} alt="Quiz" title="Add Quiz"  >

    </Card>
   </Link> 

   <Link to={`${url}/addFAQs`} >
   <Card  icon={createIcon} alt="FAQs" title="Add FAQs"  >

    </Card>
   </Link> 


   <Link to={`${url}/trash`} >
   <Card  icon={closeIcon} alt="delete" title="Delete Course?"  >

    </Card>
   </Link> 

    
    
    
    
    
    </>)
}
export default CreateCourseItemLinks;