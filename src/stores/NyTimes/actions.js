import * as types from "./constant";

export const getNyTimesArticles = (payload) => ({
    type:types.GET_NY_TIMES_ARTICLES,
    payload
});

export const getNyTimesArticlesSuccess = (payload) => ({
    type:types.GET_NY_TIMES_ARTICLES_SUCCESS,
    payload
});


export const getNyTimesArticlesFailure = (error) => ({
    type:types.GET_NY_TIMES_ARTICLES_FAILURE,
    error
});