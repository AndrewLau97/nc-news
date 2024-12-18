import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-js63.onrender.com/api",
});

function getArticles(page) {
  return api.get("/articles", { params: { p: page } }).then(({ data }) => {
    return data;
  });
}

function getSingleArticle(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

function getComments(article_id){
    return api.get(`/articles/${article_id}/comments`).then(({data})=>{
        return data
    })
}

function updateArticleVotes(article_id, updateValue){
    return api.patch(`/articles/${article_id}`,{inc_votes:updateValue})
}

function getUsers(){
  return api.get('/users').then(({data})=>{
    return data.users
  })
}

function postComment(article_id, body, username){
  return api.post(`/articles/${article_id}/comments`,{username,body}).then(({data})=>{
    return data
  })
}

export { getArticles, getSingleArticle ,getComments, updateArticleVotes, getUsers, postComment};
