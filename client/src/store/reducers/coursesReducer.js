const initState = {
    courses: [],
    
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initState, action) => {
    switch (action.type) {
      
      case "FETCH_ALL": {
        return {
          courses:action.payload,
          
          
        };
      }    
      case "FETCH_MY_COURSES": {
        return {
          mycourses:action.payload,
          
          
        };
      }
      
      default: {
        return state;
      }
    }
  };
  

  