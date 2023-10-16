import * as api from "../../api"; 


export const getMyCourse =  (Data)=>{

    try {
        /* fetch data from api  . here we get response from database and
         response always has data object that we destructure it over here*/
        const data  =  api.fetchMyCourse(Data)
        
        // console.log(data)
         return data ;
    } catch (error) {
       // console.log(error.messege);
    }
    
       
    }