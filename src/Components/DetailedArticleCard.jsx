import { formatDate } from "../utils";
function DetailedArticleCard({ articleData }) {
  const { author, title, body, topic, created_at, article_img_url, votes } =
    articleData;
  const formattedDate = formatDate(created_at, true);
  return (
    <>
      <h2>{title}</h2>
      <p>{topic}</p>
      <p>{formattedDate}</p>
      <p>{body}</p>
      <img src={article_img_url} />
      <p>Votes: {votes}</p>
    </>
  );
}

export default DetailedArticleCard;
