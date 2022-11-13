import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Register () {
   
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Yêu cầu tên người dùng!'),
        email: Yup.string().email('Địa chỉ email không hợp lệ').required('Yêu cầu email!'),
        password: Yup.string()
        .min(6, 'Mật khẩu cần lớn hơn 6 ký tự')
        .required('Yêu cầu mật khẩu!'),
        //kiem tra mat khau trung khop
        repassword: Yup.string().test('my-test', 'default message', function(repassword) {
            const password = this.parent.password
           if (repassword != password ) {
                return this.createError({message: 'Mật khẩu không khớp'})
             
            } else {
                // no error
                return register('sdf')
            }
        }).required('Nhập lại mật khẩu'),
       
      
      });
    
    const { register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
      });
        return (

            <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
                <div className="container  ">
                    <div className="row d-flex justify-content-center align-items-center  ">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="Register form" className="img-fluid" style={{ borderRadius: ' 1rem 0 0 1rem ' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
    
                                            <form  onSubmit={handleSubmit((d) => console.log(d))}>
    
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <img src="image/logo.png" width={35} ></img>
                                                    <span className="h1 fw-bold mb-0 ">&ensp;Quản lý tài chính</span>
                                                </div>
    
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Đăng ký</h5>
                                              
                                                <div class="form-floating mb-4" style={errors.username?{color:'red'}:{}}>
                                                    <input type="password" {...register('username')} class="form-control" id="username" name ='username' placeholder="name" style={errors.username?{borderColor:'red'}:{}}/>
                                                    <label for="password_Register">Họ Và Tên</label>
                                                    <small ><p>&ensp;{errors.username?.message}</p></small>
                                                </div>
                                                <div class="form-floating mb-4" style={errors.email?{color:'red'}:{}}>
                                                    <input type="text" {...register('email')} class="form-control" id="email_Register" name ='email' placeholder="name@example.com" style={errors.email?{borderColor:'red'}:{}} />
                                                    <label for="email_Register">Email</label>
                                                    <small ><p>&ensp;{errors.email?.message}</p></small>
                                                </div>
                                                <div class="form-floating mb-4" style={errors.password?{color:'red'}:{}}>
                                                    <input type="password" {...register('password')} class="form-control" id="password_Register" name ='password' placeholder="name@example.com" style={errors.password?{borderColor:'red'}:{}}/>
                                                    <label for="password_Register">Mật khẩu</label>
                                                    <small ><p>&ensp;{errors.password?.message}</p></small>
                                                </div>
                                                <div class="form-floating mb-4" style={errors.repassword?{color:'red'}:{}}>
                                                    <input type="password" {...register('repassword')} class="form-control" id="repassword_Register" name ='repassword' placeholder="name@example.com" style={errors.repassword?{borderColor:'red'}:{}}/>
                                                    <label for="password_Register">Nhập lại mật khẩu</label>
                                                    <small ><p>&ensp;{errors.repassword?.message}</p></small>
                                                </div>
            
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Đăng ký</button>
                                                    <span style={{float:'right'}}>  <button className="btn btn-lg btn-block btn-outline-warning"  type="button">
                                                        <img src="image/google.png" width={25}></img>
                                                        Google</button>
                                                  
                                                    </span>
                                                   
                                                </div>
    
                                                <a className="small text-muted" href="#!">Quên mật khẩu?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Đã có tài khoản? <Link to={'/login'}
                                                    >Đăng nhập</Link></p>
                                              
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
export default Register;