import axios from "axios"

const api=axios.create({baseURL:"https://my-nc-news-js63.onrender.com/api"})

function getArticles(page){
    return api.get("/articles",{params:{p:page}})
    .then(({data})=>{
        return data
    })
}


export{getArticles}