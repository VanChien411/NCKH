import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to = '',
    href = '',
    onClick = () => {},
    className = '',
    leftIcon = undefined,
    rightIcon = undefined,
    outline = false,
    rounded = false,
    noHover = false,
    large = false,
    children = '',
    ...passProps
}) => {
    let Component = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        outline,
        rounded,
        large,
        noHover,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
        </Component>
    );
};

export default Button;
