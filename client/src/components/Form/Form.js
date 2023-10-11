import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/actions/Posts";
const Form = ()=>{

  const dispatch = useDispatch();
  
 const [postData , setPostdata] = useState({
  title:"",
  creator:"",
  message:"",
  tags:""


 });
 


/* Creating Post */
/* handleCreatePost function */

const handleCreatePost=(e)=>{
  e.preventDefault();
 
 const postCreated = dispatch(createPost(postData));
 /* get response as Promise  and set it in redux or state and display it with useEffect */
 postCreated.then(response => {
  console.log(response);
  
}).catch(error => {
  console.error(error);
});

/* Reset Create Post input Fields   */
setPostdata({  title:"",
creator:"",
message:"",
tags:""
});

}

    return <>
    <h1>Create Post </h1>
    <form onSubmit={handleCreatePost} >
    <input type="text" name="title" value={postData.title} onChange={(e)=>setPostdata({...postData, title : e.target.value})} />
  <input type="text" name="message" value={postData.message} onChange={(e)=>setPostdata({...postData, message : e.target.value})} />
  <input type="text" name="creator" value={postData.creator} onChange={(e)=>setPostdata({...postData, creator : e.target.value})} />
  <input type="text" name="tags" value={postData.tags} onChange={(e)=>setPostdata({...postData, tags : e.target.value})} />
  <button type="submit"> Submit</button>
   </form>
   
    </>

}
export default Form;