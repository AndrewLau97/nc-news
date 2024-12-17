import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
      <CardMedia sx={{ height: 140 }} image={article_img_url} onClick={handleArticleClick}/>
      <CardActions className="CardButtons">
          <button>Votes:{votes}</button>
          <button>Comments:{comment_count}</button>
      </CardActions>
    </div>
  );
}

export default ArticleCard;
