import { useParams } from "react-router-dom";
import { newsItemSelector } from "../../features/news/newsSlice";
import { SingleNewsItem } from "../../features/singleNews/SingleNews";
import { useAppSelector } from "../../app/hooks";

const SingleNewsPage = () => {
  const { id: singleNewsId } = useParams();

  const newsItemDataState = useAppSelector(newsItemSelector(singleNewsId));

  return <div>{newsItemDataState ? <SingleNewsItem /> : "Loading..."}</div>;
};

export default SingleNewsPage;
