import { Route } from 'react-router-dom';
import axios from '../axios';


export  const checkLogin = async (data) =>{
    
    const response = await axios.post('http://localhost:8000/api/login', {
        data,
       
    })
   
    //if accessToken go to homepage else login again
    const { accessToken, user } = response.data
    if(accessToken)
    {
       console.log('accsecc ', accessToken)
       localStorage.setItem('status', JSON.stringify(accessToken));
        localStorage.setItem('token', JSON.stringify(user));
       
    }
   

    return accessToken;
    
}

export const logOut = () =>{
    return(
        localStorage.clear()
    );
    
}



