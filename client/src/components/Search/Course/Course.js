import React from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Post = ({post})=>{
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const logOut =() =>{
    //   dispatch({type:"LOGOUT"});
    //   history.push('/dashboard')
    // }
    

    return <>
    <div  style={{"width":"100px", "background":"#f1f1f1",
     "margin":"10px","float":"left","height":"100px"}}>
        <div>Post {post.title}</div>
     <button onClick={()=>{}}></button>
     
     </div>
    </>

}
export default Post;