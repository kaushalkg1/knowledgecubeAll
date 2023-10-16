
import React ,{useState} from "react";

import '../../UI/snackbar.css';
import { useDispatch } from "react-redux";
import createNew from "../../icons/add_circle_FILL0_wght200_GRAD0_opsz40.svg";
 import arrowIcon from "../../icons/chevron_right_FILL0_wght200_GRAD0_opsz40.svg";
import { CreateCourse } from "../../../store/actions/CreateCourse";
 
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {Link, useRouteMatch,Switch, Route } from "react-router-dom";

import Loading from "../../Loading/Loading";

import loadable from '@loadable/component';

import LoadingCards from "../../Loading/LoadingCards";
const ArrCards= [1,2,3,4,5,6,7,8,9]
let lazyLoad =   <LoadingCards cards={ArrCards} type="SmallCard"/>;

const CardBig  = loadable(() => import("../../UI/CardBig"), {
  fallback: lazyLoad  });
const CreateCourses = ({baseUrl})=>{
   
    const {url,path} =useRouteMatch();
 const dispatch = useDispatch();
 

 const history = useHistory();
 
 const userdata = useSelector((state)=>state?.user?.user?.user);
 const [loader , setLoader] =useState({status:false});
 
 const [statusLoading , setStatusLoading] = useState({status:true});
 const [addDetails, setAddDetails]= useState({show:false,id:''})
 const [showSnackBar , setSnackBar] = useState({status:false,show:false})
 const [courseCreate , setCourseCreate] = useState({title:"",description:"",author:userdata.id})
/* Handle Signup Function */

setTimeout(()=>{setStatusLoading({status:false})},1000)

const handleCreateCourse=(e)=>{
    e.preventDefault();
    
setLoader({status:true});
  //console.log(signup)
  
    const courseData = dispatch(CreateCourse(courseCreate));
    /* get response as Promise   */
    courseData.then(response => {
         //  console.log(response);
        
        if(response?.courseBundle){
          //  console.log(response?.user?.lastName);
          setSnackBar({status:true,show:true});
          setAddDetails({show:true,id:response?.courseBundle.id})
          setTimeout(function(){setSnackBar({status:false}); }, 3000);
        }
        else{
            setSnackBar({status:false,show:true});
         
        
        }
    
setLoader({status:false});
    
    })
    

}  
    

    return <>
    
{<Loading Load={loader?.status}/>}
    { (showSnackBar.status && showSnackBar.show ) ?  <div id="snackbarUser" >
    The Course Has Been Created </div>: '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Some Error Occured. Please Try Again.</div> : '' }


{ statusLoading.status?<LoadingCards cards={ArrCards} type="SmallCard" />:userdata?.isCreator?<>
    <Link to={`${url}/createCourse`}>
               
                <CardBig arrow={arrowIcon}  icon={createNew} alt="Create New  Course" title="Create New  Course" details=" Start Creating
                  New  Courses With Our Online Tool"  />
       
 </Link>
 
 <Link to={`${url}/createPage`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create Course Page" title="Create Course Details Page" details=" 
               Create Course Details Page With Related Links "  />
      
</Link>
 <Link to={`${url}/createStudent`}>
               
               <CardBig  arrow={arrowIcon}  icon={createNew} alt="Create New  Student" title="Create New  Student" 
               details=" Manually Create Your Students for Your Courses." />
      
</Link><Link to={`${url}/createGroup`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create  Group" title="Create Group" details=" Create Batch-Wise Group For 
               Your Students " />
      
</Link>
<Link to={`${url}/createBlog`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create  Blog" title="Create Blog"details=" Create New  Blog  To Engage Your Students"  />
      
</Link>
<Link to={`${url}/createPost`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create Post" title="Create  Post" details="Create New  Post To Engage Your Students"  />
      
</Link>
<Link to={`${url}/createEvent`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create Event" title="Create Event" details="Create New  Event , Live test , Webinar etc For All"  />
      
</Link>

<Link to={`${url}/createNotification`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create Notification" title="Create Notifications" details="Create New  Notification For Your Students"  />
      
</Link>
<Link to={`${url}/createSlides`}>
               
               <CardBig arrow={arrowIcon}  icon={createNew} alt="Create Slides" title=" Create Slides" details="Create  Slides And Record Videos For teaching "  />
      
</Link>
</>:
 history.push('/dashboard/profile')}

<Switch>

    
<Route path={`${path}/createCourse`}>
<form onSubmit={handleCreateCourse} >
 
 <div  className="login-signup-backgrop"><div  className="login-signup-card">
        <div  className="blank"> </div>
    <div  className="login-signup-card-outer">
 <div  className="login-signup-inner"> 
 
    <div  className="login-signup-left-signup"><h1 style={{"textAlign":"center"}}>Create A New Course </h1>
    
   <div  className="login-input-card"><div  className="login-iconAdmin"></div>

    
   <input name="title"  type="text" className="input-textbox" title=" Course Title "
    onChange={(e)=>setCourseCreate({...courseCreate , title : e.target.value})}  value={
      courseCreate.title
   }
 placeholder=" Course Title" />

</div>
      
   <div  className="login-input-card"><div  className="login-iconAdmin"></div>

    
<input name="description"  type="text" className="input-textbox"  title=" Course Description "  value={
      courseCreate.description
   }
 placeholder=" Course Description" onChange={(e)=>setCourseCreate({...courseCreate , description : e.target.value})} />
 </div>  
  
  {addDetails.show?<div  className="login-input-card"><div  className="login-iconAdmin">
  </div>
  <Link to={`${baseUrl}/my-courses/${addDetails.id}`}>
  <div className="login-signup-button closeButtonBlack" >Add Details</div>
  </Link></div> :
  <div  className="login-input-card"><div  className="login-iconAdmin"></div>
<button  className="login-signup-button" type="submit"  id="update"> Create  </button>
  </div>
  }
  <div  className="login-input-card"><div  className="login-iconAdmin">
  </div>
  <Link to={url}>
  <div className="login-signup-button closeButtonBlack" >close</div>
  </Link>
  </div></div>
   </div>
   
   </div>
	    
	</div>

	</div>


    </form>
    </Route>
    </Switch>
    </>

}
export default CreateCourses;







