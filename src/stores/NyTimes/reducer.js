import * as types from "./constant";
import {GET_NY_TIMES_ARTICLES} from "./constant";

export const initialState = {
    isNyTimesArticlesFetching: false,
    nyTimesArticles: [],
    nyTimesArticleError: null,
}

const NyTimesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_NY_TIMES_ARTICLES:
            return {
                ...state,
                isNyTimesArticlesFetching: true,
                nyTimesArticleError: null,
            };
        case types.GET_NY_TIMES_ARTICLES_SUCCESS:
            return {
                ...state,
                isNyTimesArticlesFetching: false,
                nyTimesArticles: action.payload,
                nyTimesArticleError: null,
            };
        case types.GET_NY_TIMES_ARTICLES_FAILURE:
            return {
                ...state,
                isNyTimesArticlesFetching: false,
                nyTimesArticleError: action.payload,
            };


        default:
            return state;
    }
}

export default NyTimesReducer;