import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMyCourse } from "../../../store/actions/FetchMyCourse";
import Loading from "../../Loading/Loading";

import { useRouteMatch,Link } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import {  useDispatch } from "react-redux";
import { addToMyCourses } from "../../../store/actions/initialization";

import closeIcon from "../../icons/close_FILL0_wght200_GRAD-25_opsz40.svg";
import EditCourseLinks from "./EditCourseLinks";
import CreateCourseItemLinks from "./CreateCourseItemLinks";
import Card from "../../UI/Card";
import Logo from "../../NoMatch/Logo";

const EditCourse =() =>{
          const {courseEditId} = useParams();
          
  const {url} =useRouteMatch();
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
  
   //console.log(response.data.course)
           }).catch(error => {
            // console.error(error);
            ;
            
           });; 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[courseEditId])
 
 
return(
    <>
    
{<Loading Load={loader?.status}/>}

{courseData?.data?._id?<>
<div className="outer-all-card-white  grid-70 ">
 <div className="outer-all-card-white"><h2>
 {courseData?.data?.title?"Start Editing  '"+courseData?.data?.title+"'":""}</h2>
 </div>

<Link to={`${url}/trash`} >
<Card  icon={closeIcon} alt="delete" title="Delete Course?"  >

 </Card>
</Link> 
</div> 
<div className="outer-all-card-white  grid-70 ">
<div><EditCourseLinks url={url} courseData={courseData}  /> </div>

<div> <CreateCourseItemLinks url={url} courseData={courseData}/> </div>
</div> </> 
:<Logo/>
    }
     </> 
)
}

export default EditCourse;