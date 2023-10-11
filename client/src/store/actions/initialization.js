import { getAllCourses } from "./FetchCourses";


import { getMyCourses } from "./FetchMyCourses";



// with Thunk
export const initCourses = () => dispatch => {
  getAllCourses().then(response => {
   // return response.data.posts; 
    dispatch({
      type: "FETCH_ALL",
      
      payload:response.data.posts
    });
  }).catch(error => {
    console.error(error);
  });; 
  
};


// with Thunk
export const initMyCourses = (data) => dispatch => {
 
  getMyCourses(data).then(response => {
   // return response.data.posts; 
//console.log(response);
   
    dispatch({
      type: "FETCH_MY_COURSES",
      
      payload:response.data.posts
    });
  }).catch(error => {
    console.error(error);
  });; 
  
};

export const initUser = (data) => dispatch => {
   dispatch({
    type: "LOGIN",
    
    payload:data
  });

}
