import * as types from './../constants/ActionTypes';

export const status = (status) =>{
    return {
        type : types.TOGGLE_STATUS,
        status
    }
}

export const sort = (sort) =>{
    return {
        type: types.SORT,
        sort // sort : sort
    }
}

export const rememberLogin = (rememberLogin) =>{
    return {
        type: types.REMEMBER_LOGIN,
        rememberLogin
    }
}


