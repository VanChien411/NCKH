import { json } from "react-router-dom";

function initalState(){
    

    if(localStorage.getItem('token') !== null)
    return JSON.parse(localStorage.getItem('token'))   ;
    else if(sessionStorage.getItem('token') !== null)
    return JSON.parse(sessionStorage.getItem('token'))   ;
  return null;

}
var myReducer = (state = initalState(), action) => {
   console.log('user1',state)
    if(action.type === 'USER'){
        var {user} = action; 
        return user;
    }
    return state;
}

export default myReducer;