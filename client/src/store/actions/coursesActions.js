import { getPosts } from "./Posts";


// with Thunk
export const initCourses = () => dispatch => {
  getPosts().then(response => {
   // return response.data.posts; 
    dispatch({
      type: "FETCH_ALL",
      
      payload:response.data.posts
    });
  }).catch(error => {
    console.error(error);
  });; 
  
};
