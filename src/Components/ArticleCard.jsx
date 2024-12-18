import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils";
import { useState } from "react";
import { updateArticleVotes } from "../api";

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
  const [articleVotesAdded, setArticleVotesAdded] = useState(0);

  const formattedDate = formatDate(created_at, false);
  const navigate = useNavigate();
  const handleArticleClick = (e) => {
    navigate(`/article/${article_id}`);
  };
  const handleVotesClick = (e) => {
      const voteValue=Number(e.target.value)
      updateArticleVotes(article_id,voteValue).catch((err)=>{
        console.log("error",err)
        alert("Please try again later")
        setArticleVotesAdded((currArticleVotesAdded) => {
            return currArticleVotesAdded - voteValue;
          });
    })
    setArticleVotesAdded((currArticleVotesAdded) => {
      return currArticleVotesAdded + voteValue;
    });
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
        <p className="VotesText">Votes: {votes + articleVotesAdded}</p>
      <div className="CardButtons">
        {votes+articleVotesAdded>0&&
        <button
          onClick={handleVotesClick}
          className="DownVoteButton"
          value="-1"
        >
          Dislike
        </button>
        }
        <button onClick={handleVotesClick} className="UpVoteButton" value="1">
          Like
        </button>
        <button>Comments:{comment_count}</button>
      </div>
    </div>
  );
}

export default ArticleCard;
