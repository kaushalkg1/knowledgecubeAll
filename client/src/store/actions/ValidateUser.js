import * as api from "../../api"; 


export const validateMe = async (mydata)=>{

    try {
              const data  = await api.fetchValidateMe(mydata)
        // console.log(data)
         return data ;
    } catch (error) {
        console.log(error.messege);
    }
    
       
    }