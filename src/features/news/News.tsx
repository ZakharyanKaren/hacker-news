import { useEffect } from "react";
import { Table } from 'antd';

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getNewsAsync, selectNewsData } from "./newsSlice";
import { useNavigate } from 'react-router-dom';

export const News = () => {
    const newsDataState = useAppSelector(selectNewsData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getNewsAsync());
    }, []);

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Published at',
            dataIndex: 'publishedAt',
            key: 'publishedAt',
        },
    ];

    // newsDataState.status

    return (
        <div>
            <Table dataSource={newsDataState.value} columns={columns} onRow={record => {
                return {
                    onClick: () => {
                        navigate('/news/'+ record.id);
                    },
                };
            }} />
            <button disabled={newsDataState.status === 'loading'} onClick={() => {
                dispatch(getNewsAsync());
            }}>reset</button>
        </div>
    );
}