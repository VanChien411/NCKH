import React, { Component ,useState, useEffect} from "react";
import { Link,} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {checkLogin} from '../../router/userRoter';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import ButtonAccess from './buttonAccess';


function Login(props) {
   
   
    console.log('login status',props.status)

    const validationSchema = Yup.object().shape({
        password: Yup.string()
        .min(6, 'Mật khẩu cần lớn hơn 6 ký tự')
        .required('Yêu cầu mật khẩu!'),
      email: Yup.string().email('Địa chỉ email không hợp lệ').required('Yêu cầu email!'),
       
      });
    
    const { register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
      });

      //post userdate to backend

      //set status accessToken
    const accessToken =()=> {
        // let checkbox = document.getElementById('remember_Login');
        // store.setRememberLogin(checkbox.checked)
        // console.log(store.getRememberLogin);
    }
   
        return (

            <section className="vh-100 " style={{ backgroundColor: '#9A616D' }}>
                 
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block"> 
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" style={{ borderRadius: ' 1rem 0 0 1rem ' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            {/* d is userData */}
                                            <form  onSubmit={handleSubmit((d) => {checkLogin(d)
                                                .then(sta => {props.addStatus(sta); console.log('login status',props.status); if(!sta)document.getElementById('error').innerHTML = 'Tài khoản hoặc mật khẩu chưa đúng' })
                                                .catch(errors =>{alert('errors login'+errors)});  })}>
    
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <img src="image/logo.png" width={35} ></img>
                                                    <span className="h1 fw-bold mb-0 ">&ensp;Quản lý tài chính</span>
                                                </div>
    
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Đăng nhập <span className="small mx-4" style={{color :'red'}} name='error' id='error'></span></h5>
                                                        
                                                
                                                <div class="form-floating mb-4" style={errors.email?{color:'red'}:{}}>
                                                    <input type="text" {...register('email')} class="form-control" id="email_Login" name ='email' placeholder="name@example.com" style={errors.email?{borderColor:'red'}:{}} />
                                                    <label for="email_Login">Email</label>
                                                    <small ><p>&ensp;{errors.email?.message}</p></small>
                                                </div>
                                                
                                                <div class="form-floating " style={errors.password?{color:'red'}:{}}>
                                                    <input type="password" {...register('password')} class="form-control" id="password_Login" name ='password' placeholder="name@example.com" style={errors.password?{borderColor:'red'}:{}}/>
                                                    <label for="password_Login">Mật khẩu</label>
                                                    <small ><p>&ensp;{errors.password?.message}</p></small>
                                                </div>
    
                                                <div className="mb-2 opacity-75">
                                                    <input type='checkbox' id="remember_Login" name ='rememberLogin' onChange={accessToken}/>
                                                    <label for="remember_Login">&ensp;<u >Ghi nhớ đăng nhập</u></label>
                                                   
                                                </div>

                                                <div className="pt-1 mb-4">
                                                   <ButtonAccess value = {'Đăng nhập'} />                                       
                                                </div>
    
                                                <a className="small text-muted" href="#!">Quên mật khẩu?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Chưa có tài khoản? <Link to={'/register'}>Đăng ký</Link></p>
                                              
                                            </form>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
   
   


}
const mapStateToProps = state =>{
    return {
        status : state.status
    }
};
const mapDispatchToProps = (dispatch, props) =>{
    return {
        addStatus : (status) =>{
            dispatch(actions.status(status))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
