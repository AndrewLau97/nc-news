import { formatDate } from "../utils";
import { useState } from "react";
import { updateArticleVotes } from "../api";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { postComment } from "../api";

function DetailedArticleCard({ articleData, articleInfo, setArticleInfo }) {
  const {
    author,
    title,
    body,
    topic,
    created_at,
    article_img_url,
    votes,
    article_id,
  } = articleData;
  const formattedDate = formatDate(created_at, true);
  const [articleVotesAdded, setArticleVotesAdded] = useState(0);
  const [commentSection, setCommentSection] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const { user } = useContext(UserContext);
  const handleVotesClick = (e) => {
    const voteValue = Number(e.target.value);
    if (Object.keys(user).length === 0) {
      alert("Please log in to vote");
    } else {
      console.log("updating");
      updateArticleVotes(article_id, voteValue).catch((err) => {
        alert("Please try again later");
        setArticleVotesAdded((currArticleVotesAdded) => {
          return currArticleVotesAdded - voteValue;
        });
      });
      setArticleVotesAdded((currArticleVotesAdded) => {
        return currArticleVotesAdded + voteValue;
      });
    }
  };

  const handleCommentClick = () => {
    if (Object.keys(user).length === 0) {
      alert("Please log in to comment");
    } else {
    setCommentSection(true)}
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentInput === "") {
      setSubmitError(true);
    } else {
      postComment(article_id,commentInput,user.username).then(({comment})=>{
        setArticleInfo({article:articleInfo.article, comments:[comment,...articleInfo.comments]})
        console.log("submitted")
      }).catch((err)=>{alert("Unable to upload comment, please try again later")})
      setCommentSection(false);
      setCommentInput("");
      setSubmitError(false);
    }
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{topic}</p>
      <p>{formattedDate}</p>
      <p>{body}</p>
      <img src={article_img_url} />
      <p>Votes: {votes + articleVotesAdded} </p>
      <div className="CardButtons">
        {votes + articleVotesAdded > 0 && (
          <button
            onClick={handleVotesClick}
            className="DownVoteButton"
            value="-1"
          >
            Dislike
          </button>
        )}
        <button onClick={handleVotesClick} className="UpVoteButton" value="1">
          Like
        </button>
        <button onClick={handleCommentClick}>Add comment</button>
      </div>
      {commentSection && (
        <div className="AddCommentSection">
          <form>
            <label>Add Comment: </label>
            <textarea value={commentInput} onChange={handleCommentChange} />
            <button onClick={handleSubmitComment}>Submit</button>
          </form>
          {submitError && <p>Please add a comment</p>}
        </div>
      )}
    </>
  );
}

export default DetailedArticleCard;
