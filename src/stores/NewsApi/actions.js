import * as types from "./constant";

export const getNewsAPISources = (payload) => ({
    type:types.GET_NEWS_API_SOURCES,
    payload
});

export const getNewsAPISourcesSuccess = (payload) => ({
    type:types.GET_NEWS_API_SOURCES_SUCCESS,
    payload
});


export const getNewsAPISourcesFailure = (error) => ({
    type:types.GET_NEWS_API_SOURCES_FAILURE,
    error
});

export const getNewsAPIArticles = (payload) => ({
    type:types.GET_NEWS_API_ARTICLES,
    payload
});

export const getNewsAPIArticlesSuccess = (payload) => ({
    type:types.GET_NEWS_API_ARTICLES_SUCCESS,
    payload
});


export const getNewsAPIArticlesFailure = (error) => ({
    type:types.GET_NEWS_API_ARTICLES_FAILURE,
    error
});