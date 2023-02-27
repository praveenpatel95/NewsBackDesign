import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import moment from "moment";

function Article({article, index}) {
    return (
        <Card key={index}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h4" sx={{height:{sm:"80px", xs:"60px"}}}>
                    {article?.headline?.main.substring(0, 50)}
                </Typography>
                <Typography>
                    {article?.section_name}
                </Typography>

                <Typography component="p" variant="subtitle2">{moment(article?.pub_date).format("DD MMM, YYYY")}</Typography>
            </CardContent>

            <CardActions>
                <Button href={article?.web_url} target="_blank" size="small">Read More</Button>
            </CardActions>
        </Card>
    )
}

export default Article;