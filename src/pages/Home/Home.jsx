import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

const DAILY_TABLE = {
    heading: {
        color: '#38b6ff',
        data: ['Bảng sinh hoạt'],
    },
    data: [],
};

const INVESTMENT_TABLE = {
    heading: {
        color: '#ffc700',
        data: ['Bảng đầu tư'],
    },
    data: [],
};

const OBLIGATORY_TABLE = {
    heading: {
        color: '#ff5757',
        data: ['Bảng bắt buộc'],
    },
    data: [],
};

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Table rawData={DAILY_TABLE} srcData="test/home/daily/" />
            <Table rawData={INVESTMENT_TABLE} srcData="test/home/investment/" />
            <Table rawData={OBLIGATORY_TABLE} srcData="test/home/obligatory/" />
        </div>
    );
};

export default Home;
