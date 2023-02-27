import * as types from "./constant";

export const getTheGuardianSources = (payload) => ({
    type:types.GET_THE_GUARDIAN_SOURCES,
    payload
});

export const getTheGuardianSourcesSuccess = (payload) => ({
    type:types.GET_THE_GUARDIAN_SOURCES_SUCCESS,
    payload
});


export const getTheGuardianSourcesFailure = (error) => ({
    type:types.GET_THE_GUARDIAN_SOURCES_FAILURE,
    error
});

export const getTheGuardianArticles = (payload) => ({
    type:types.GET_THE_GUARDIAN_ARTICLES,
    payload
});

export const getTheGuardianArticlesSuccess = (payload) => ({
    type:types.GET_THE_GUARDIAN_ARTICLES_SUCCESS,
    payload
});


export const getTheGuardianArticlesFailure = (error) => ({
    type:types.GET_THE_GUARDIAN_ARTICLES_FAILURE,
    error
});