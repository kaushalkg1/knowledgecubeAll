import * as api from "../../api"; 


export const getAllCourses = async ()=>{

    try {
        /* fetch data from api  . here we get response from database and
         response always has data object that we destructure it over here*/
        const data  = await api.fetchAllCourses()
          /* creating action object with action type and payload to store all data from api call */
         // console.log(data)
       
         return data ;
        // const action = { type: "FETCH_ALL", payload:data }
    
        // /* with redux thunk we dispatch action object instead of returning it */ 
        //   //  return action;
        //   dispatch(action);
     
          /* as soon as we dispatch action  from App.js file in useEffect() 
          we go to reducer eg Post.js reducer to handle all logic for fetching the posts  
          and we return action.payload there in reducer . */
    } catch (error) {
        console.log(error.messege);
    }
    
       
    }