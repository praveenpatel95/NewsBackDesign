import * as types from "./constant";

export const initialState = {
    isTheGuardianSourcesFetching: false,
    theGuardianSources: [],
    theGuardianSourceError: null,

    isTheGuardianArticlesFetching: false,
    theGuardianArticles: [],
    theGuardianArticleError: null,
}

const TheGuardianReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_THE_GUARDIAN_SOURCES:
            return {
                ...state,
                isTheGuardianSourcesFetching: true,
                theGuardianSourceError: null,
            };
        case types.GET_THE_GUARDIAN_SOURCES_SUCCESS:
            return {
                ...state,
                isTheGuardianSourcesFetching: false,
                theGuardianSources: action.payload,
                theGuardianSourceError: null,
            };
        case types.GET_THE_GUARDIAN_SOURCES_FAILURE:
            return {
                ...state,
                isTheGuardianSourcesFetching: false,
                theGuardianSourceError: action.payload,
            };

        case types.GET_THE_GUARDIAN_ARTICLES:
            return {
                ...state,
                isTheGuardianArticlesFetching: true,
                theGuardianArticleError: null,
            };
        case types.GET_THE_GUARDIAN_ARTICLES_SUCCESS:
            return {
                ...state,
                isTheGuardianArticlesFetching: false,
                theGuardianArticles: action.payload,
                theGuardianArticleError: null,
            };
        case types.GET_THE_GUARDIAN_ARTICLES_FAILURE:
            return {
                ...state,
                isTheGuardianArticlesFetching: false,
                theGuardianArticleError: action.payload,
            };


        default:
            return state;
    }
}

export default TheGuardianReducer;