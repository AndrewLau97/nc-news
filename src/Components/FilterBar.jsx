import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function FilterBar() {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [sortBy, setSortBy] = useState(sort_by ? sort_by : "created_at");
  const [orderBy, setOrderBy] = useState(order ? order : "desc");
  const [showFilter, setShowFilter] = useState(false);
  const handleSelectTopic = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(()=>{
    setShowFilter(false)
    setSortBy(sort_by ? sort_by : "created_at")
    setOrderBy(order ? order : "desc")
  },[sort_by,order, topic])

  const handleSelectOrder = (e) => {
    setOrderBy(e.target.value);
  };
  const handleFilterButton = () => {
    // const toggle = !showFilter;
    setShowFilter((currShowFilter)=>{
        const toggle=!currShowFilter
        return toggle
    });
  };
  const handleSearch = () => {
    setSearchParams({ sort_by: sortBy, order: orderBy });
    setShowFilter(false);
  };
  return (
    <div>
      <button onClick={handleFilterButton}>Filter</button>
      {showFilter && (
        <div>
          <div className="SortBySection">
            <select
              defaultValue={sort_by ? sort_by : sortBy}
              onChange={handleSelectTopic}
            >
              <option value="article_id">Article_id</option>
              <option value="author">Author</option>
              <option value="comment_count">Comments</option>
              <option value="created_at">Date created</option>
              <option value="title">Title</option>
              {!topic&&<option value="topic">Topic</option>}
              <option value="votes">Votes</option>
            </select>
          </div>
          <div className="OrderBySection">
            <select
              defaultValue={order ? order : orderBy}
              onChange={handleSelectOrder}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
