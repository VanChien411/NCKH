import classNames from 'classnames/bind';

import styles from './Follow.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

const TIME_TABLE = {
    heading: {
        color: '#38b6ff',
        data: ['Hoạt động', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    },
    data: [],
};

const Follow = () => {
    return (
        <div className={cx('wrapper')}>
            <Table rawData={TIME_TABLE} srcData="test/follow/daily/" />
        </div>
    );
};

export default Follow;
