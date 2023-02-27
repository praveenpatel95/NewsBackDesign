import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
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
import {getNyTimesArticles} from "../../../stores/NyTimes/actions";


function NyTimes() {
    const [orderBy, setOrderBy] = useState('newest');
    const [searchParams] = useSearchParams();
    const urlKeyword = searchParams.get("q");

    useEffect(() => {
        if (urlKeyword) {
            searchArticles()
        }
    }, [urlKeyword])

    const {
        nyTimesArticles,
        isNyTimesArticlesFetching,
        nyTimesArticleError
    } = useSelector(state => state?.NyTimesReducer);

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
    }, [orderBy]);

    const searchArticles = () => {
        let url = `?q=${values?.keyword}&sort=${orderBy}&page=${page}`;
        if (values?.dateFrom && values?.dateTo) {

            let date1 = new Date(values.dateFrom)
            let dateFrom = date1.getDate() + '-' + (date1.getMonth() + 1) + '-' + date1.getFullYear()

            let date2 = new Date(values.dateTo)
            let dateTo = date2.getDate() + '-' + (date2.getMonth() + 1) + '-' + date2.getFullYear()

            url += `&from=${dateFrom}&to=${dateTo}`;
        }
        dispatch(getNyTimesArticles(url))
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
                        {isNyTimesArticlesFetching ?
                            <Grid container display="flex"
                                  justifyContent="center"
                                  alignItems="center" mt={5} pt={5}><Loader/></Grid>
                            :
                            nyTimesArticles?.length > 0 ?
                                <Grid container spacing={3}>
                                    {nyTimesArticles?.map((article, index) => (
                                        <Grid item sm={6} key={index}>
                                            <Article article={article} index={index}/>
                                        </Grid>

                                    ))}
                                < /Grid>
                                :
                                "No Data found"
                        }
                        {nyTimesArticleError &&
                            <Typography color="error">{nyTimesArticleError}</Typography>
                        }
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Sources
                            orderBy={orderBy}
                            setOrderBy={setOrderBy}
                        />
                    </Grid>

                </Grid>
            </Container>
        </HelmetProvider>
    )
}

export default NyTimes;