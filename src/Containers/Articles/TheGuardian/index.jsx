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
import useValidator from "../../../utils/useValidator";
import * as Yup from "yup";
import {getTheGuardianArticles} from "../../../stores/TheGuardian/actions";
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
        theGuardianArticles,
        isTheGuardianArticlesFetching,
        theGuardianArticleError
    } = useSelector(state => state?.TheGuardianReducer);

    const [page, setPage] = useState(1)

    const onSubmit = () => {
        searchArticles()
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
        let url = `?q=${values?.keyword}&section=${selectedSource}&page=${page}`;
        if (values?.dateFrom && values?.dateTo) {

            let date1 = new Date(values.dateFrom)
            let dateFrom = date1.getDate() + '-' + (date1.getMonth() + 1) + '-' + date1.getFullYear()

            let date2 = new Date(values.dateTo)
            let dateTo = date2.getDate() + '-' + (date2.getMonth() + 1) + '-' + date2.getFullYear()

            url += `&from=${dateFrom}&to=${dateTo}`;
        }

        dispatch(getTheGuardianArticles(url))
    }

    const handleChangePage = (event, value) => {
        setPage(value)
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>New York Times Articles</title>
            </Helmet>
            <ArticleSearchBar
                source="New York Times"
                handleSubmit={handleSubmit}
                values={values}
                setValues={setValues}

            />
            <Container>
                <Grid container spacing={3} mb={3} mt={0}>

                    <Grid item sm={9} xs={12}>

                        {isTheGuardianArticlesFetching ?
                            <Grid container display="flex"
                                  justifyContent="center"
                                  alignItems="center" mt={5} pt={5}><Loader/></Grid>
                            :
                            theGuardianArticles?.results?.length > 0 ?
                                <Grid container spacing={3}>
                                    {theGuardianArticles?.results?.map((article, index) => (
                                        <Grid item sm={4} xs={12} key={index}>
                                            <Article article={article} index={index}/>
                                        </Grid>

                                    ))}
                                    <Grid container mt={3}>
                                        <Pagination count={theGuardianArticles?.total} page={page} color="primary"
                                                    onChange={handleChangePage}/>
                                    </Grid>
                                < /Grid>
                                :
                                "No Data found"
                        }
                        {theGuardianArticleError &&
                            <Typography color="error">{theGuardianArticleError}</Typography>
                        }
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Sources
                            selectedSource={selectedSource}
                            setSelectedSource={setSelectedSource}
                        />
                    </Grid>

                </Grid>
            </Container>
        </HelmetProvider>
    )
}

export default NewsAPI;