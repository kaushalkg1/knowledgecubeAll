// /* import api from index.js file  eg , to use fetchPosts from api folder */
// import * as api from "../../api"; 


// /* creating action creators  , functions whitch creates actions  export it and 
// import it in App.js file  to dispatch it there  */
//  /* while working with async data for db call we use redux-thunk ,
//   which allows us to create additional async(dispatch)=> function with
//  action creator and return as  dispatch(action)  */
// export const getPosts = async ()=>{

// try {
//     /* fetch data from api  . here we get response from database and
//      response always has data object that we destructure it over here*/
//     const data  = await api.fetchPosts()
//       /* creating action object with action type and payload to store all data from api call */
//      // console.log(data)

//      return data ;
//     // const action = { type: "FETCH_ALL", payload:data }

//     // /* with redux thunk we dispatch action object instead of returning it */ 
//     //   //  return action;
//     //   dispatch(action);
 
//       /* as soon as we dispatch action  from App.js file in useEffect() 
//       we go to reducer eg Post.js reducer to handle all logic for fetching the posts  
//       and we return action.payload there in reducer . */
// } catch (error) {
//     console.log(error.messege);
// }

   
// }

// export const createPost = (post) => async (dispatch)=>{
//     try {
//         const {data } = await api.createPost(post);
//         const action = { type: "CREATE", payload:data }
//         dispatch(action);
//         return data 
  
//     } catch (error) {
//         console.log(error);
//     }
// }
