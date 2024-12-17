import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function ArticleCard({articleData}){
    const {author, title, topic, created_at,votes,article_img_url,comment_count}=articleData
    const date=created_at.split("T")[0].split("-")
    const months=["January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]
    return <div className="ArticleCard">
            <CardContent>
            <h2 className="TopicTitle">
               {topic[0].toUpperCase()}{topic.slice(1)}
            </h2>
            <p variant="body2" sx={{ color: 'text.secondary' }}>{title}<br/>
                {months[date[1]-1]} {date[0]} <br/> </p>
            </CardContent>
        <CardMedia 
        sx={{height:140}}
        image={article_img_url}/>
        <CardActions>
        <div>
            <p>Votes:{votes}</p>
            <p>Comments:{comment_count}</p>
        </div>
        </CardActions>
    </div>


}


export default ArticleCard