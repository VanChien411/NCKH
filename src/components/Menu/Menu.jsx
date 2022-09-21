import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Button from '~/components/Button';
import { default as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const Menu = ({ items = [] }) => {
    const [page, setPage] = useState(items[0].title);

    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {items.map((item, index) => (
                            <MenuItem
                                key={index}
                                data={item}
                                onClick={() => {
                                    setPage(item.title);
                                }}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div>
                <Button outline large>
                    {page}
                </Button>
            </div>
        </Tippy>
    );
};

export default Menu;
