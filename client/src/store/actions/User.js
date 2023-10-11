
import * as api from "../../api"; 


export const userLogin = (post) => async (dispatch)=>{
    try {
        const {data } = await api.userLogin(post);
        localStorage.setItem('profile',JSON.stringify({data}));
        dispatch({
            type: "LOGIN",
            
            payload:data
          }); 
         
        return data ;
    } catch (error) {
        console.log(error);
    }
}




export const fetchUser = (post) => async (dispatch)=>{
    try {
        
        const {data } = await api.fetchUser(post);
       console.log("kaka");
       console.log(data);
       console.log("kaka");
        dispatch({
            type: "LOGIN",
            
            payload:data
          });
        return data ;
    } catch (error) {
        console.log(error);
    }
}

export const updateUserData = (post) => async (dispatch)=>{
    try {
        const {data } = await api.updateUserData(post);
       
        dispatch({
            type: "LOGIN",
            
            payload:data
          });
        return data ;
    } catch (error) {
        console.log(error);
    }
}

export const userSignup = (post) => async (dispatch)=>{
    try {
        const {data } = await api.userSignup(post);
        localStorage.setItem('profile',JSON.stringify({data}));
        dispatch({
            type: "LOGIN",
            
            payload:data
          }); 
         
        return data 
     } catch (error) {
        console.log(error);
    }
}

