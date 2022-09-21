import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = ({
    label = '',
    type = 'text',
    id = '',
    underline = false,
    autoSize = false,
    className = '',
    defaultValue = '',
    onUpdate = (e) => {},
    ...passProps
}) => {
    const [width, setWidth] = useState(10);
    const inputRef = useRef();

    const HandleChange = () => {
        onUpdate(inputRef.current);
        setWidth(inputRef.current.value.length <= 10 ? 10 : inputRef.current.value.length);
    };

    useEffect(() => {
        setWidth(inputRef.current.value.length <= 10 ? 10 : inputRef.current.value.length);
    }, []);

    const classes = cx('input', {
        [className]: className,
        underline,
    });

    return (
        <div className={cx('wrapper')}>
            {label && <label htmlFor={id}>{label}:</label>}
            <input
                ref={inputRef}
                type={type}
                id={id}
                style={{ width: autoSize ? width + 'ch' : 'auto' }}
                className={classes}
                defaultValue={defaultValue}
                onChange={HandleChange}
                {...passProps}
            />
        </div>
    );
};

export default Input;
