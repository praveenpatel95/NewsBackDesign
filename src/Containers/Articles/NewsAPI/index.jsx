import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "@mui/material/Container";
import {Grid, Pagination} from "@mui/material";
import Sources from "./Sources";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import Loader from "../../../Components/Loader";
import Typography from "@mui/material/Typography";
import ArticleSearchBar from "../../../Components/ArticleSearchBar";
import {getNewsAPIArticles} from "../../../stores/NewsApi/actions";
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import Box from "@mui/material/Box";


function NewsAPI() {
    const [selectedSource, setSelectedSource] = useState('');
    const [searchParams] = useSearchParams();
    const urlKeyword = searchParams.get("q");

    useEffect(() => {
        if (urlKeyword) {
            searchArticles()
        }
    }, [urlKeyword])

    const {
        newsAPIArticles,
        isNewsApiArticlesFetching,
        newsAPIArticleError
    } = useSelector(state => state?.NewsAPIReducer);

    const pageSize = 12;
    const [page, setPage] = useState(1)

    const onSubmit = () => {
        searchArticles()
    }
    const handleChangePage = (event, value) => {
        setPage(value)
    }

    const {
        values,
        setValues,
        touched,
        errors,
        handleSubmit,
    } = useValidator({
        initialValues: {
            keyword: urlKeyword,
            dateFrom: '',
            dateTo: '',
        },
        validationSchema: Yup.object().shape({
            keyword: Yup.string().required('Enter a keyword.'),

        }),
        onSubmit,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        searchArticles()
    }, [selectedSource, page]);

    const searchArticles = () => {
        let url = `?q=${values?.keyword}&sources=${selectedSource}&pageSize=${pageSize}&page=${page}`;
        if (values?.dateFrom && values?.dateTo) {

            let date1 = new Date(values.dateFrom)
            let dateFrom = date1.getDate() + '-' + (date1.getMonth() + 1) + '-' + date1.getFullYear()

            let date2 = new Date(values.dateTo)
            let dateTo = date2.getDate() + '-' + (date2.getMonth() + 1) + '-' + date2.getFullYear()

            url += `&from=${dateFrom}&to=${dateTo}`;
        }

        dispatch(getNewsAPIArticles(url))
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>NewsAPI Articles</title>
            </Helmet>
            <ArticleSearchBar
                source="News API"
                handleSubmit={handleSubmit}
                values={values}
                setValues={setValues}

            />
            <Container>
                <Grid container spacing={3} mb={3} mt={0}>
                    <Grid item sm={3} xs={12}>
                        <Sources
                            selectedSource={selectedSource}
                            setSelectedSource={setSelectedSource}
                        />
                    </Grid>
                    <Grid item sm={9} xs={12}>


                        {isNewsApiArticlesFetching ?
                            <Grid container display="flex"
                                  justifyContent="center"
                                  alignItems="center" mt={5} pt={5}><Loader/></Grid>
                            :
                            newsAPIArticles?.articles?.length > 0 ?
                                <Grid container spacing={3}>
                                    {newsAPIArticles?.articles.map((article, index) => (
                                        <Grid item sm={4} key={index}>
                                            <Article article={article} index={index}/>
                                        </Grid>

                                    ))}
                                    <Box mt={3}>
                                        <Pagination count={newsAPIArticles?.totalResults} page={page} color="primary"
                                                    onChange={handleChangePage}/>
                                    </Box>
                                < /Grid>
                                :
                                "No Data found"
                        }
                        {newsAPIArticleError &&
                            <Typography color="error">{newsAPIArticleError}</Typography>
                        }
                    </Grid>


                </Grid>
            </Container>
        </HelmetProvider>
    )
}

export default NewsAPI;