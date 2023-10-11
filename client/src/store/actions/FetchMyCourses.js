import * as api from "../../api"; 


export const getMyCourses = async (mydata)=>{

    try {
        /* fetch data from api  . here we get response from database and
         response always has data object that we destructure it over here*/
        const data  = await api.fetchMyCourses(mydata)
        // console.log(data)
         return data ;
    } catch (error) {
        console.log(error.messege);
    }
    
       
    }