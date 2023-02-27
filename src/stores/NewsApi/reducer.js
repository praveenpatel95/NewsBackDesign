import * as types from "./constant";

export const initialState = {
    isNewsApiSourcesFetching: false,
    newsAPISources: [],
    newsAPISourceError: null,

    isNewsApiArticlesFetching: false,
    newsAPIArticles: [],
    newsAPIArticleError: null,
}

const NewsAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWS_API_SOURCES:
            return {
                ...state,
                isNewsApiSourcesFetching: true,
                newsAPISourceError: null,
            };
        case types.GET_NEWS_API_SOURCES_SUCCESS:
            return {
                ...state,
                isNewsApiSourcesFetching: false,
                newsAPISources: action.payload,
                newsAPISourceError: null,
            };
        case types.GET_NEWS_API_SOURCES_FAILURE:
            return {
                ...state,
                isNewsApiSourcesFetching: false,
                newsAPISourceError: action.payload,
            };

        case types.GET_NEWS_API_ARTICLES:
            return {
                ...state,
                isNewsApiArticlesFetching: true,
                newsAPIArticleError: null,
            };
        case types.GET_NEWS_API_ARTICLES_SUCCESS:
            return {
                ...state,
                isNewsApiArticlesFetching: false,
                newsAPIArticles: action.payload,
                newsAPIArticleError: null,
            };
        case types.GET_NEWS_API_ARTICLES_FAILURE:
            return {
                ...state,
                isNewsApiArticlesFetching: false,
                newsAPIArticleError: action.payload,
            };


        default:
            return state;
    }
}

export default NewsAPIReducer;