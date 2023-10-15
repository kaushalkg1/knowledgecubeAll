import React,  {useState,useEffect} from "react";
import "./styleAll.css";
import { BrowserRouter ,  Switch, Route, Link  } from "react-router-dom";
import {  useDispatch } from "react-redux";

import { initUser} from "./store/actions/initialization";

import { useSelector } from "react-redux";

import UserImg from "./components/img/userImg.gif";
import Dashboard from "./components/Dashboard";
import KnowledgeCube from "./components/img/knowledgecube.gif";
import Auth from "./components/Auth/Auth";

import NoMatch from "./components/NoMatch/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import Navber from "./Navbar/UserMenu";
import Search from "./components/Search/Search";
import Loading from "./components/Loading/Loading";

import loadable from '@loadable/component';
// npm i @loadable/component 
let lazyLoad =   <Loading/>;
  ;
  const Login = loadable(() => import("./components/Login"), {
    fallback: lazyLoad  });
    const SignUp = loadable(() => import("./components/SignUp"), {
      fallback: lazyLoad  });
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
// getting data from store.
const data = useSelector((state)=>state?.user?.user);
//console.log(data)
useEffect(()=>{
//  const data=JSON.parse(localStorage.getItem("profile")).data;
  
  setUser(JSON.parse(localStorage.getItem("profile")));
  
    dispatch(initUser(data))

  /* dont put data as dependency as it will produce error with redux-persist.
  user will be initiated again and again and token may change infinitely,
  which will affect login & protect-route mechanism.
  */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token,dispatch])     
  /* console.log(user); */ 
  //console.log(user?.data?.user?.currentToken);
  return (<>
    <BrowserRouter>
    <div  style={menuOuter}>


              <div  key="1">
                <Link style={menuStyle}  to="">
               
                <img src={KnowledgeCube} alt="KnowledgeCube" style={{"width":"165px " }} />
  
                </Link> <div  key="12">
             
                <Link  style={menuStyle}  to="/search/courses"><div style={{"padding":"10px"}} >
               
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
            <Route path="/search" >

<Search/>
            </Route>
            
          
            <Route path="/auth" component={Auth}/>
                 <Route  path="/signup">
             <SignUp/> 
                 </Route><Route  path="/login">
              <Login/>
                 </Route>
                 <ProtectedRoute user={user}  path="/dashboard">
              <Dashboard  style={{"background":"  background:rgba(153, 204, 153, 0.11) !important"}}/>
                 </ProtectedRoute>
                 <ProtectedRoute user={user}  path="/messenger">
             
                 </ProtectedRoute>
                 <ProtectedRoute user={user}  path="/checkout">
             
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






