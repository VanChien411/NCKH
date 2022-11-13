var initalState = false;

var myReducer = (state = initalState, action) => {
    if(action.type === 'REMEMBER_LOGIN'){
        var {rememberLogin} = action; 
        return rememberLogin;
    }
    return state;
}

export default myReducer;