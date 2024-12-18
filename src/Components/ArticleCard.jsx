import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils";

function ArticleCard({ articleData }) {
  const {
    article_id,
    title,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = articleData;
  const formattedDate = formatDate(created_at, false);
  const navigate = useNavigate();
  const handleArticleClick = (e) => {
    navigate(`/article/${article_id}`);
  };
  
  return (
    <div className="ArticleCard">
      <CardContent onClick={handleArticleClick}>
        <h2 className="TopicTitle">
          {topic[0].toUpperCase()}
          {topic.slice(1)}
        </h2>
        <p variant="body2" sx={{ color: "text.secondary" }}>
          {title}
          <br />
          {formattedDate}
          <br />
        </p>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={article_img_url}
        onClick={handleArticleClick}
        className="ArticleImage"
      />
      <p className="VotesText">Votes: {votes /*+ articleVotesAdded*/}</p>
      <p className="CommentsText">Comments: {comment_count}</p>
    </div>
  );
}

export default ArticleCard;
