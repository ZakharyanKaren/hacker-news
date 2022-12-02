import "./newsInfo.scss";

type NewsInfoProps = {
  author: string | unknown;
  url: string | unknown;
  publishedAt: string | unknown;
};

export const NewsInfo = ({ author, url, publishedAt }: NewsInfoProps) => {
  return (
    <div className='news-info-wrapper'>
      <p>{`-- ${author} --`}</p>
      <a href={`${url}`} target='_blank' rel='noreferrer'>
        Link to this news
      </a>
      <p>{`-- ${publishedAt} --`}</p>
    </div>
  );
};
