import { useEffect } from "react";
import { Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getNewsAsync, selectNewsData } from "./newsSlice";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Button } from "../../components/button/Button";
// import { Button } from "../../components/button/Button";

export const News = () => {
  const newsDataState = useAppSelector(selectNewsData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let getNewsIntervalId = setInterval(() => {
      dispatch(getNewsAsync());
    }, 60000);

    dispatch(getNewsAsync());

    return () => clearInterval(getNewsIntervalId);
    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Published at",
      dataIndex: "publishedAt",
      key: "publishedAt",
    },
  ];

  // newsDataState.status

  return (
    <div>
      <Table
        dataSource={newsDataState.value}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate("/news/" + record.id);
            },
          };
        }}
      />
      <Button
        disabled={newsDataState.status === "loading"}
        onClick={() => dispatch(getNewsAsync())}
        text='Reset'
        textAlign='center'
      />
    </div>
  );
};
