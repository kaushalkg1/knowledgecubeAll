import React from "react";
import {Route , Redirect} from "react-router-dom";

import { useSelector } from "react-redux";
const ProtectedRoute =({user , children , ...rest}) =>{
    const localToken= JSON.parse(localStorage.getItem("profile"))?.data?.user?.currentToken;
  const token = useSelector((state)=>state?.user?.user?.user?.currentToken);
  // console.log(localToken)
  // console.log(token)
 
  return(<Route {...rest} 
render={({location})=>(token===localToken&&token&&localToken)?(children):(<Redirect to={{pathname:"/login",state:{from:location}}}></Redirect>)

}
></Route>)}
export default ProtectedRoute;