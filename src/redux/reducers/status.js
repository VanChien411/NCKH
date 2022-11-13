var initalState = localStorage.getItem('status');

var myReducer = (state=initalState , action) => {
    if(action.type === 'TOGGLE_STATUS'){
        var {status} = action
        return status;
    }
    return state;

}

export default myReducer;