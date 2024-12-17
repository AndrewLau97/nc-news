import { useEffect, useState } from "react";
import { getSingleArticle, getComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import DetailedArticleCard from "./DetailedArticleCard";

function Article() {
  const { article_id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ article }) => {
        return article;
      })
      .then((article) => {
        getComments(article_id).then(({ comments }) => {
          setArticleInfo({ article, comments });
          setLoading(false);
        });
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="ArticleInfoContainer">
            <DetailedArticleCard articleData={articleInfo.article}/>
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
