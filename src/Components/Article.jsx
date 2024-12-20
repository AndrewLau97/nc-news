import { useEffect, useState } from "react";
import { getSingleArticle, getComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import DetailedArticleCard from "./DetailedArticleCard";

function Article() {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorLoading,setErrorLoading]=useState(false)
  useEffect(() => {
    setErrorLoading(false)
    setLoading(true)
    getSingleArticle(article_id)
      .then(({ article }) => {
        return article;
      })
      .then((article) => {
        getComments(article_id).then(({ comments }) => {
          setArticleInfo({ article, comments });
          setLoading(false);
        });
      }).catch((err)=>{
        setErrorLoading(true)
        if(err.message==="Network Error"){
          alert("unable to connect, please try again later")
        }else if(err.status===404||err.status===400){
          alert("Unable to find article, article does not exist")
        }
      });
  }, []);
  return (
    <>
      {errorLoading?<p>Error</p>:loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="ArticleInfoContainer">
            <DetailedArticleCard articleData={articleInfo.article} articleInfo={articleInfo} setArticleInfo={setArticleInfo}/>
          </div>
          <div className="CommentsInfoContainer">
            {articleInfo.comments.map((commentInfo)=>{
                return <CommentCard commentInfo={commentInfo} key={commentInfo.comment_id}/>
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Article;
