import { useNavigate, useParams } from "react-router-dom";
import { newsItemSelector } from "../../features/news/newsSlice";
import "./singleNews.scss";
import { useAppSelector } from "../../app/hooks";
import { Button } from "../../components/button/Button";
import { NewsInfo } from "../newsInfo/NewsInfo";

export const SingleNewsItem = () => {
  const { id: singleNewsId } = useParams();
  const newsItemDataState = useAppSelector(newsItemSelector(singleNewsId));
  const navigate = useNavigate();

  return (
    <div className='single-news-wrapper'>
      <h1>{`${newsItemDataState?.title}`}</h1>
      <div className='single-news-content-wrapper'>
        <div>
          <div>
            <p>{`${newsItemDataState?.description}`}</p>
          </div>
          <div>
            <p>{`${newsItemDataState?.content}`}</p>
          </div>
          <NewsInfo
            author={newsItemDataState?.author}
            url={newsItemDataState?.url}
            publishedAt={newsItemDataState?.publishedAt}
          />
        </div>
        <div>
          <img src={`${newsItemDataState?.urlToImage}`} alt='news' />
        </div>
      </div>
      <Button
        disabled={false}
        onClick={() => navigate("/")}
        text='Back to news'
        textAlign='left'
        marginTop='10px'
      />
    </div>
  );
};
