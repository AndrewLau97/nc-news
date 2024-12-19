import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";

function Homepage() {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading]=useState(true)
  const {topic}=useParams()
  const handlePagesClick = (e) => {
    const pageInstructions = e.target.textContent;
    setLoading(true)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (pageInstructions === "Prev") {
      setPage(page - 1);
    } else if (pageInstructions === "Next") {
      setPage(page + 1);
    } else {
      setPage(Number(pageInstructions));
    }
  };
  console.log(topic)
  useEffect(() => {
    getArticles(page, topic).then((articlesData) => {
      setArticles(articlesData.articles);
      setPageLimit(Math.ceil(articlesData.total_count / 10));
      setLoading(false)
    });
  }, [page, topic]);
  return (
    <>{loading?<p>loading</p>:
      <>
     
      <div className="Articles" id="articles">
        {articles.map((articleData) => {
          return (
            <ArticleCard
              key={articleData.article_id}
              articleData={articleData}
            />
          );
        })}
      </div>
      <nav className="Pages">
        {page > 1 && (
          <button className="pagination-button" onClick={handlePagesClick}>
            Prev
          </button>
        )}
        <div className="pagination-number">
          {page === 2 ? (
            <>
              <button onClick={handlePagesClick}>{page - 1}</button>
            </>
          ) : (
            page >= 3 && (
              <>
                <button onClick={handlePagesClick}>{page - 2}</button>
                <button onClick={handlePagesClick}>{page - 1}</button>
              </>
            )
          )}
          <button className="currentPage">{page}</button>
          {page + 2 <= pageLimit ? (
            <>
              <button onClick={handlePagesClick}>{page + 1}</button>
              <button onClick={handlePagesClick}>{page + 2}</button>
            </>
          ) : (
            page + 1 <= pageLimit && (
              <button onClick={handlePagesClick}>{page + 1}</button>
            )
          )}
        </div>
        {page < pageLimit && (
          <button className="pagination-button" onClick={handlePagesClick}>
            Next
          </button>
        )}
      </nav> </>
    
  }
    </>
  );
}

export default Homepage;
