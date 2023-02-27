import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LazyLoad from 'react-lazyload';

function Article({article, index}) {
    return (
        <Card key={article?.index}>
            <LazyLoad height={200}>
            <CardMedia
                component="img"
                alt={article?.title}
                height="140"
                loading="lazy"
                image={article?.urlToImage}
            />
            </LazyLoad>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h4" sx={{height:{sm:"80px", xs:"60px"}}}>
                    {article?.title.substring(0, 50)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article?.description.length > 100 ?
                        article?.description.substring(0, 100) + "..."
                        :
                        article?.description
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={article?.url} target="_blank" size="small">Read More</Button>
            </CardActions>
        </Card>
    )
}

export default Article;