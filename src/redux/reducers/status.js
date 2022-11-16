function initalState(){
    if(localStorage.getItem('status') == 'true'|| sessionStorage.getItem('status') == 'true')
    return true;
  
return false;

}


var myReducer = (state=initalState() , action) => {
    if(action.type === 'TOGGLE_STATUS'){
        var {status} = action
        return status;
    }
    return state;

}

export default myReducer;