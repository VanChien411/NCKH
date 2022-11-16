import status from './status';
import sort from './sort';
import  rememberLogin  from './rememberLogin';
import user from './user';
import { combineReducers } from 'redux';


const myReducer = combineReducers({
   
    status : status,
    sort : sort,
    rememberLogin,
    user,
})

export default myReducer;