import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import leftOpen from "./icons/fullscreen_FILL0_wght200_GRAD0_opsz40.svg";

function Logout() {
    const history = useHistory();
    const dispatch =useDispatch();
    const logOut =() =>{
      dispatch({type:"LOGOUT"});
      history.push('/login')
    }
    
  return (
    <div  className={`item-card  add-cursor  `} onClick={logOut} >
            <div  className="item-icon">
            <img src={leftOpen} alt="Logout"/>
          
              
            </div>
            <div  className="item-text">
            Logout
            </div>
        </div>
  )
}

export default Logout
