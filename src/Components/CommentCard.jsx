import { useContext, useState } from "react";
import { formatDate } from "../utils";
import { UserContext } from "../Context/UserContext";
import { deleteComment } from "../api";

function CommentCard({ commentInfo }) {
  const { author, votes, created_at, body, comment_id} = commentInfo;
  const [isDeleted,setIsDeleted]=useState(false)
  const [disableButton, setDisableButton]=useState(false)
  const{user}=useContext(UserContext)
  const formattedDate = formatDate(created_at, true);
  const handleDeleteComment=()=>{
    setDisableButton(true)
    deleteComment(comment_id).then(()=>{
      setIsDeleted(true)
    }).catch(()=>{
      alert("Unable to delete comment, please try again later")
      setDisableButton(false)
    })
  }
  return (<>
  {isDeleted?<p>deleted</p>:<div className="Comment">
      <h4>{author}</h4>
      <p>{formattedDate}</p>
      <p>{body}</p>
      <p>votes:{votes}</p>
      {user.username===author&&<button onClick={handleDeleteComment} disabled={disableButton}>{disableButton?"deleting":"delete comment"}</button>}
    </div>}
  </>
  );
}

export default CommentCard;
