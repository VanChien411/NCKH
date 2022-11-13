import status from './status';
import sort from './sort';
import  rememberLogin  from './rememberLogin';
import { combineReducers } from 'redux';


const myReducer = combineReducers({
   
    status : status,
    sort : sort,
    rememberLogin,
})

export default myReducer;