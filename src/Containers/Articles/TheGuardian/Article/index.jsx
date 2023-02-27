import {Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LazyLoad from 'react-lazyload';
import moment from "moment/moment";

function Article({article, index}) {
    return (
        <Card key={article?.index}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="h4" sx={{height:{sm:"120px", xs:"50px"}}}>
                    {article?.webTitle}
                </Typography>
                <Typography>
                    {article?.pillarName} | {article?.sectionName}
                </Typography>

                <Typography component="p" variant="subtitle2">{moment(article?.webPublicationDate).format("DD MMM, YYYY")}</Typography>
            </CardContent>
            <CardActions>
                <Button href={article?.webUrl} target="_blank" size="small">Read More</Button>
            </CardActions>
        </Card>
    )
}

export default Article;