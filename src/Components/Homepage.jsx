import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useParams, useSearchParams } from "react-router-dom";
import FilterBar from "./FilterBar";

function Homepage() {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError,setIsError]=useState(false)
  
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePagesClick = (e) => {
    const pageInstructions = e.target.textContent;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (pageInstructions === "Prev") {
      setPage(page - 1);
    } else if (pageInstructions === "Next") {
      setPage(page + 1);
    } else {
      setPage(Number(pageInstructions));
    }
  };
  useEffect(() => {
    setIsError(false)
    setLoading(true);
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    getArticles(page, topic, sort_by, order).then((articlesData) => {
      setArticles(articlesData.articles);
      setPageLimit(Math.ceil(articlesData.total_count / 10));
      setLoading(false);
    }).catch(()=>{
      setIsError(true)
      alert("Unable to load articles, please try again later")
    });
  }, [page, topic, searchParams]);
  return (
    <>{isError?<p>Error</p>:<div>
      <FilterBar/>
      {loading ? (
        <p>loading</p>
      ) : (
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
          </nav>{" "}
        </>
      )}
      </div>}
    </>
  );
}

export default Homepage;
