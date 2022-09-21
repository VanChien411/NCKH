import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Table.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import request from '~/utils/request';

const cx = classNames.bind(styles);

const Table = ({ rawData, srcData = '' }) => {
    const [data, setData] = useState(rawData.data);
    const [heading] = useState(rawData.heading.data);

    const AppendData = () => {
        setData((prev) => {
            if (prev.length === 0) return heading.length === 1 ? [['', '']] : [[...heading.map(() => '')]];
            return [...prev, [...prev[0].map(() => '')]];
        });
    };

    const HandleUpdateData = (x, y, newValue) => {
        setData((prev) => {
            prev[x][y] = newValue;
            return prev;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const req = await request.get(srcData);
            setData(req.data['data']);
        };
        if (srcData !== '') fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                {heading && (
                    <thead
                        className={cx('table__header')}
                        style={{ backgroundColor: rawData.heading.color || 'inherit' }}
                    >
                        <tr>
                            {heading.map((h, index) => (
                                <th key={index} colSpan={data.length === 0 ? 1 : data[0].length / heading.length}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className={cx('table__body')}>
                    {data.map((row, indexRow) => (
                        <tr key={indexRow}>
                            <th>
                                <Input
                                    autoSize
                                    className={cx('input')}
                                    defaultValue={row[0]}
                                    onUpdate={(el) => HandleUpdateData(indexRow, 0, el.value)}
                                />
                            </th>
                            {row.slice(1).map((val, indexCol) => (
                                <td key={indexCol}>
                                    <Input
                                        autoSize
                                        min="0"
                                        type="number"
                                        className={cx('input')}
                                        defaultValue={val}
                                        onUpdate={(el) => HandleUpdateData(indexRow, indexCol + 1, el.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot className={cx('table__footer')}>
                    <tr>
                        <td colSpan={data.length === 0 ? heading.length : data[0].length} onClick={AppendData}>
                            <Button noHover style={{ width: '100%' }}>
                                &#8230;
                            </Button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;
