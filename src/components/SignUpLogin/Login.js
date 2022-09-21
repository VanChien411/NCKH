

function Login(props) {
   function sendata(){
    props.getLogin(false);
   }
    
    return (
        <div className={props.tran? "card shadow border-2" : "collapsing"}>
        <div className='card-header'>
            <div className='title'><b>Đăng nhập</b></div>
        </div>
        <div className="card-body">
            <form>
                <input type='email' className='form-control mb-2' placeholder='Email hoặc số điện thoại '></input>
                <input type='password' className='form-control mb-2' placeholder='Mật khẩu '></input>
                <button className='btn btn-primary form-control mb-2'>Đăng nhập</button>
                {/* Sử lý đăng nhập (Kiểm tra tài khoản) */}
                <div className='text-center'>
                    <a className='btn-link'>Quên mật khẩu?</a>
                    <hr></hr>

                    <button className='btn btn-success ' type='Button' name='DK' onClick={sendata}>Tạo tài khoản mới</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;
