
import axios from '../axios';


export  const checkLogin = async (data) =>{
    const rememberLogin = document.getElementById('remember_Login');
    const response = await axios.post('http://localhost:8000/api/login', {
        data,
       
    })
   
    //if accessToken go to homepage else login again
    const { accessToken, user } = response.data
   
    if(accessToken)
    {
       console.log('accsecc ', accessToken)
       if(rememberLogin.checked){
        localStorage.setItem('status', JSON.stringify(accessToken));
        localStorage.setItem('token', JSON.stringify(user));
       }
       else{
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
       }
     
       window.location.assign('/home');
    }
   
    return accessToken;
    
}

export const checkRegister=async (data) =>
{
    console.log('1',data)
    const response = await axios.post('http://localhost:8000/api/register', {
        data,
       
    })
    console.log('sssss',response.data)
    const { accessToken, user } = response.data
    if(accessToken)
    {
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
        window.location.assign('/home');
    }

    return accessToken;
    
}

export const loginWithGoogle =async (data) =>
{
    console.log('1',data)
    const response = await axios.post('http://localhost:8000/api/loginWithGoogle', {
        data,
       
    })
    console.log('sssss',response.data)
    const { accessToken, user } = response.data
    if(accessToken)
    {
        sessionStorage.setItem('status', JSON.stringify(accessToken));
        sessionStorage.setItem('token', JSON.stringify(user));
        window.location.assign('/home');
    }

    return accessToken;
    
}

export const logOut = () =>{

  
    
    return (
        localStorage.clear(),
        sessionStorage.clear(),
        window.location.assign('/login')
    )
}



