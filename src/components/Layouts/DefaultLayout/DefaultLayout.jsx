import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Input from '~/components/Input';
import Header from '~/components/Layouts/components/Header';
import Section from '~/components/Section';
import { useState } from 'react';
import Login from '~/components/SignUpLogin/Login';
import Sign from '~/components/SignUpLogin/Sign';

const cx = classNames.bind(styles);


function DefaultLayout({ children }) {


    const [user, setUser] = useState('false');
    const [logins, setlogin] = useState('false');
    function getLogin(value) {
        setlogin(value)
     
    }
    function getUser(value) {
       
        setUser(value)
    }
    return (

        <div className={cx('wrapper ')}>
            <Header parentC={getUser} />


            <div className='row mt-3'>
                <div className='col'>
                    <div className={cx('inner')}>
                        <Section center className={cx('container ')}>
                            <form className={cx('form')}>
                                <div>
                                    <Input label="Thu nhập tháng" type="number" id="form__inp-income" min="0" underline />
                                </div>

                                <div className=''>
                                    <Input label="Thời gian thực hiện từ" type="date" id="form__inp-from" underline />
                                    <Input label="đến" type="date" id="form__inp-to" underline />
                                </div>
                            </form>
                        </Section>

                        <Section center  >{children}</Section>
                    </div>

                </div>
                <div className={user ?  'collapsing':'col-3'}>
                    {/* Sign - Login */}
                    <Login tran={logins} getLogin={getLogin}></Login>
                    <Sign tran={logins} getLogin={getLogin}></Sign>
                </div>
                <div>
                </div>

            </div>
        </div>
    );
};

export default DefaultLayout;
