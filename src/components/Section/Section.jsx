import classNames from 'classnames/bind';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const Section = ({ children = undefined, center = false, className = '', ...passProps }) => {
    const classes = cx('wrapper', {
        [className]: className,
        center,
    });

    return (
        <div className={classes} {...passProps}>
            {children}
        </div>
    );
};

export default Section;
