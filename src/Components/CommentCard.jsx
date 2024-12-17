import { formatDate } from "../utils";

function CommentCard({ commentInfo }) {
  const { author, votes, created_at, body } = commentInfo;
  const formattedDate = formatDate(created_at, true);
  return (
    <div className="Comment">
      <h4>{author}</h4>
      <p>{formattedDate}</p>
      <p>{body}</p>
      <p>votes:{votes}</p>
    </div>
  );
}

export default CommentCard;
