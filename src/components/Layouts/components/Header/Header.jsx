import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

const LIST_MENU_ITEMS = [
    {
        title: 'Đặt mục tiêu',
        page: '/',
    },
    {
        title: 'Theo dõi chi tiêu',
        page: '/follow',
    },
];

function Header (props)  {
  
    const [user, setUser] = useState(false);
    function sendData () {
       props.parentC(user);
    }
    const handleSetUser = () => {
        
        setUser((prev) => !prev);
        sendData();
    };
    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('shopName')}>Trang chủ</div>

                <Menu items={LIST_MENU_ITEMS} />

                {/* user || login */}
                {user ? (
                    <Button outline rounded onClick={handleSetUser}>
                        Hidden
                    </Button>
                ) : (
                    <Button outline rounded onClick={handleSetUser}>
                        Sign in
                    </Button>
                )}
               
            </div>
         
        </header>
    );
};

export default Header;
