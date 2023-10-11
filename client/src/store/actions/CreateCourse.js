
import * as api from "../../api"; 



export const CreateCourse = (post) => async (dispatch)=>{
    try {
        const {data } = await api.createCourse(post);
       // localStorage.setItem('profile',JSON.stringify({data}));
        dispatch({
            type: "COURSE-BUNDLE",
            
            payload:data
          }); 
         
        return data 
     } catch (error) {
        console.log(error);
    }
}

