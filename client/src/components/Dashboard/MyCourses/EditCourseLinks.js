import React from "react";


import loadable from '@loadable/component';
import LoadingCards from "../../Loading/LoadingCards";
const ArrCards= [1,2,3,4,5,6,7,8,9];
let lazyLoad =   <LoadingCards cards={ArrCards} type="EditCard"/>;

const EditCard  = loadable(() => import("../../UI/EditCard"), {
  fallback: lazyLoad  });
const EditCourseLinks =({url,courseData})=>{

    return(<>
    
   
<EditCard  
url={url} name="title"  title="Course Title : "
value={courseData?.data?.title?courseData?.data?.title:"Not Available"}
/>


<EditCard  
url={url} name="description"  title="Description : "
value={courseData?.data?.description?courseData?.data?.description:"Not Available"}
/>



<EditCard  
url={url} name="status"  title="Course Status : "
value={courseData?.data?.status?courseData?.data?.status:"Not Available"}
/>



<EditCard  
url={url} name="filter"  title="Course Type: "
value={courseData?.data?.filter?courseData?.data?.filter:"Not Available"}
/>



<EditCard  
url={url} name="language"  title="Language/s: "
value={courseData?.data?.language?courseData?.data?.language:"Not Available"}
/>



<EditCard  
url={url} name="visibility"  title="Visibility: "
value={courseData?.data?.visibility?courseData?.data?.visibility:"Not Available"}
/>

<EditCard  
url={url} name="withPassword"  title="Password?: "
value={courseData?.data?.withPassword?.status?"Yes":"No"}
/>
{courseData?.data?.withPassword?.status?
    <EditCard  
url={url} name="withPassword"  title="Add Password: "
value={courseData?.data?.withPassword?.password?courseData?.data?.withPassword?.password:""}
/>:""

}


<EditCard  
url={url} name="publish"  title="When Publish?: "
value={courseData?.data?.publish==="Immediately"?"Immediately":"AtFutureDate"}
/>

{courseData?.data?.publish==="AtFutureDate"?
    <EditCard  
url={url} name="withPassword"  title="Add Password: "
value={courseData?.data?.publishAtFutureDate?courseData?.data?.publishAtFutureDate:""}
/>:""

}




<EditCard  
url={url} name="courseDuration"  title="Duration: "
value={courseData?.data?.courseDuration?courseData?.data?.courseDuration:""}
/>

<EditCard  
url={url} name="allowRatingReview"  title="Allow review: "
value={courseData?.data?.allowRatingReview?true:false}
/>

<EditCard  
url={url} name="payment"  title="Paid Or Free?: "
value={courseData?.data?.payment?courseData?.data?.payment:""}
/>
{courseData?.data?.payment==="Paid"?<>
<EditCard  
url={url} name="regularPrice"  title="Regular Price "
value={courseData?.data?.regularPrice?courseData?.data?.regularPrice:0}
/>

<EditCard  
url={url} name="salePrice"  title="Sale Price "
value={courseData?.data?.salePrice?courseData?.data?.salePrice:0}
/>

<EditCard  
url={url} name="taxApplicable"  title=" Apply Tax? "
value={courseData?.data?.taxApplicable?"Applicable":"Not Applicable"}
/>

<EditCard  
url={url} name="taxPrecentage:"  title="Tax %: "
value={courseData?.data?.taxPrecentage?courseData?.data?.taxPrecentage:0}
/>



</>:""
}
<EditCard  
url={url} name="maximumStudent"  title="Max Students: "
value={courseData?.data?.maximumStudent?courseData?.data?.maximumStudent:0}
/><div className="outer-all-card-white   ">
    * Set Total Number of students that can enrol in this course. Set 0 for no limit. 
</div>
<EditCard  
url={url} name="difficultyLevel"  title="Difficulty: "
value={courseData?.data?.difficultyLevel?courseData?.data?.difficultyLevel:"All"}
/><EditCard  
url={url} name="publicEnrollment"  title="Public?: "
value={courseData?.data?.publicEnrollment?"No enrolment required .This Course is Public":
"This Course Is Not Public , You Need To Enrol Before Accessing Course."}
/>

<div className="outer-all-card-white   ">
    
 * If You Make This Course Public. No enrolment required. 
</div>


<EditCard  
url={url} name="featureImage"  title="Image: "
value="Add Feature Image For Your Course"
/>

<EditCard  
url={url} name="featureVideo"  title="Video: "
value="Add Feature Video For Your Course"
/>

<EditCard  
url={url} name="Categories"  title="Categoryies "
value="Add or Edit All Course Categories"
/>
<EditCard  
url={url} name="Sub-Courses"  title="Sub-Courses "
value="Add or Edit All Course Sub-Courses"
/>

<EditCard  
url={url} name="MileStones"  title="Milestones "
value="Add or Edit All Course MileStones"
/>

<EditCard  
url={url} name="Modules"  title="Modules "
value="Add or Edit All Course Modules"
/>

<EditCard  
url={url} name="Topics"  title="Topics"
value="Add or Edit All Course Topics"
/>



    
    
    </>)
}
export default EditCourseLinks;