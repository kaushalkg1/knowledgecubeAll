/*
create api folder and index.js file inside it .
 here we write api code to connect to database (for doing database operations)
 use axios for making api calls */
import axios from "axios";


/* url pointing to backend route */
//const url = 'http://localhost:3002/api/';

const url = 'https://theknowledgecube.onrender.com/api/'; 


 export const fetchAllCourses =  () => axios.get(url);

 export const createPost = (newPost) => axios.post(url,newPost);


 export const userLogin = (login) => axios.post(`${url}/login`,login);
 

 export const fetchUser = (data) => axios.post(`${url}/fetchuser`,data);
 
 export const userSignup = (signup) => axios.post(`${url}/signup`,signup);  
 
 export const updateUserData = (updateUserData) => axios.post(`${url}/updateUser`,updateUserData);
 
 export const createCourse = (courseData) => axios.post(`${url}/createCourse`,courseData);
 
 export const fetchMyCourses = (mycourseData) => axios.post(`${url}/myCourse`,mycourseData);
 
 