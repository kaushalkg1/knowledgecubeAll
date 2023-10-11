import React,  {useState,useEffect} from "react";
import "./styleAll.css";
import { BrowserRouter ,  Switch, Route, Link } from "react-router-dom";
import {  useDispatch } from "react-redux";

import { initUser} from "./store/actions/initialization";

import { useSelector } from "react-redux";

import UserImg from "./components/img/userImg.gif";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import KnowledgeCube from "./components/img/knowledgecube.gif";
import Auth from "./components/Auth/Auth";
import ShowCourses from "./components/Search/ShowCourses";

import NoMatch from "./components/NoMatch/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import Navber from "./Navbar";
//import { fetchUser } from "./store/actions/User";
function App() {
const menuStyle= {"float":"left", "padding":"10px 25px","fontSize":"16px",
"boxShadow":"0 7px 20px 0 rgba(1,1,1,0.01)", "background":"#fff" ,
"textDecoration":"none",
"color":"#99cc99",
"fontWeignt":"bold" };

   const menuOuter = { "position":"fixed",
   "boxShadow":"0 7px 20px 0 rgba(1,1,1,0.01)", "left":"0px",
   "zIndex":"99999","right":"0px","top":"0px","background":"#fff"}
 const dispatch = useDispatch();
//  useEffect(()=>{
//    /* dispatch action here , first import actions from action folder and add them here   */
 
//    dispatch(initCourses())
   
//   dispatch(initUser())
//  },[dispatch])


 /* get user info from localStorage if exist */
const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

const token = user?.token;
const data = useSelector((state)=>state?.user?.user);
useEffect(()=>{
//  const data=JSON.parse(localStorage.getItem("profile")).data;
  
  setUser(JSON.parse(localStorage.getItem("profile")));
    dispatch(initUser(data))

  },[token,dispatch,data]);

  /* console.log(user); */ 
  //console.log(user?.data?.user?.currentToken);
  return (<>
    <BrowserRouter>
    <div  style={menuOuter}>


              <div  key="1">
                <Link style={menuStyle}  to="/dashboard">
               
                <img src={KnowledgeCube} alt="KnowledgeCube" style={{"width":"165px " }} />
  
                </Link> <div  key="12">
             
                <Link  style={menuStyle}  to="/courses"><div style={{"padding":"10px"}} >
               
               Courses
             </div></Link>
             </div> </div>
              <div className="navbar-menu-outer" >
                <div className="navbar-menu-start"> <img src={UserImg}  style={{ "width":"50px","height":"50px","borderRadius":"50%"}}alt="User"/> </div>
              <div className="navbar-menu" >
           <Navber/>
            </div>
            </div>
            </div>
          
         <Switch>
        <Route exact path="/">
            <Login/>
            </Route>
            <Route path="/courses" component={ShowCourses}></Route>
            <Route path="/auth" component={Auth}/>
                 <Route  path="/signup">
             <SignUp/> 
                 </Route><Route  path="/login">
              <Login/>
                 </Route>
                 <ProtectedRoute user={user}  path="/dashboard">
              <Dashboard/>
                 </ProtectedRoute>
                 <Route  path="*">
              <NoMatch/>
                 </Route>
             
           
          </Switch>
    </BrowserRouter>
    </>
  );
};
export default App;






