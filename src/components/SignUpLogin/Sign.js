
function Sign(props){
    function sendata(){
        props.getLogin(true);
       }
        
    return (

        <div className={props.tran? "collapsing" : "card shadow border-2"}>
        <div className='card-header'>
            <div className='title'><b>Đăng ký</b></div>
        </div>
        <div className='card-body'>
            <form>
                <input type='email' className='form-control mb-2' placeholder='Email hoặc số điện thoại '></input>
                <input type='password' className='form-control mb-2' placeholder='Mật khẩu '></input>
                <input type='password' className='form-control mb-2' placeholder='Nhập lại mật khẩu '></input>
                <div className='card-footer text-center' >
                    <button className='btn btn-success mx-1 w-40' type='Button'  >Đăng ký</button>
                    {/* Sử lý lệnh đăng ký(kiểm tra mật khẩu và đưa vào database) */}
                    <button className='btn btn-primary ms-1 w-40' type='Button' name='DN' onClick={sendata}>Đăng nhập</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Sign;
