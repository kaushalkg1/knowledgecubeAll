
import React ,{useState} from "react";

import '../../UI/snackbar.css';
import { useDispatch } from "react-redux";
import createNewCourse from "../../icons/assignment_add_FILL0_wght200_GRAD0_opsz40.svg";
import { CreateCourse } from "../../../store/actions/CreateCourse";
 
import { useSelector } from "react-redux";

import {Link, useRouteMatch,Switch, Route } from "react-router-dom";

const CreateCourses = ({baseUrl})=>{
   
    const {url,path} =useRouteMatch();
 const dispatch = useDispatch();
 
 const userdata = useSelector((state)=>state?.user?.user?.user);
 const [addDetails, setAddDetails]= useState({show:false,id:''})
 const [showSnackBar , setSnackBar] = useState({status:false,show:false})
 const [courseCreate , setCourseCreate] = useState({title:"",description:"",author:userdata.id})
/* Handle Signup Function */
const handleCreateCourse=(e)=>{
    e.preventDefault();
  //console.log(signup)
  
    const courseData = dispatch(CreateCourse(courseCreate));
    /* get response as Promise   */
    courseData.then(response => {
           console.log(response);
        
        if(response?.courseBundle){
          //  console.log(response?.user?.lastName);
          setSnackBar({status:true,show:true});
          setAddDetails({show:true,id:response?.courseBundle.id})
          setTimeout(function(){setSnackBar({status:false}); }, 3000);
        }
        else{
            setSnackBar({status:false,show:true});
         
        
        }
    
    
    })
    

}  
    

    return <>
    { (showSnackBar.status && showSnackBar.show ) ?  <div id="snackbarUser" >
    The Course Has Been Created </div>: '' }
 { (!showSnackBar.status && showSnackBar.show ) ? 
  <div id="snackbarUser" >Some Error Occured. Please Try Again.</div> : '' }

    <Link to={`${url}/createCourse`}><div className="create-card add-cursor">
                <div className="create-card-icon">
                    <img src={createNewCourse} alt="create New Course"/>
                </div> <div className="create-card-text">
                    <div className="create-card-title">
                        Create New  Course
                 
                    </div> 
                    <div className="create-card-description">
                  Lorem ipsum dolor sit amet consectetur, 
                    </div> 
                </div> </div>
 </Link>
 
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
  <div className="login-signup-button closeButton" >Add Details</div>
  </Link></div> :
  <div  className="login-input-card"><div  className="login-iconAdmin"></div>
<button  className="login-signup-button" type="submit"  id="update"> Create  </button>
  </div>
  }
  <div  className="login-input-card"><div  className="login-iconAdmin">
  </div>
  <Link to={url}>
  <div className="login-signup-button closeButton" >close</div>
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







