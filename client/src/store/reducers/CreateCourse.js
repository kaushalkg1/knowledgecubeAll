const initState = {
    user: [],
 
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initState, action) => {
    switch (action.type) {
      
      case "LOGIN": {

      
       
      //  console.log(action?.payload);
        return {...state, user:action?.payload }
         
          
        
      } 
      case "LOGOUT": {

        localStorage.clear()
        return {...state, user:null }
         
          
        
      }

      default: {
        return state;
      }
    }
  };
  