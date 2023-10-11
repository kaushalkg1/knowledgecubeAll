import { combineReducers } from "redux";
import courseData from "./coursesReducer";
import User from "./User";

export default combineReducers({
  courses: courseData,
  user: User,
   
 
});
