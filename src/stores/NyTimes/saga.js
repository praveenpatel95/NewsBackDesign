import {call, put, takeLatest, all} from 'redux-saga/effects'
import api from "../../utils/api";
import {getNyTimesArticlesFailure, getNyTimesArticlesSuccess} from "./actions";
import {GET_NY_TIMES_ARTICLES} from "./constant";

export function* fetchNyTimesArticles({payload}) {
    try {
        const response = yield call(api().get, `/articles/nytimes${payload}`);
        if (response) {
            yield put(getNyTimesArticlesSuccess(response?.response?.docs));
        }
    } catch (e) {
        yield put(getNyTimesArticlesFailure(e.message));
    }
}

export function* fetchNyTimesArticlesFlow() {
    yield takeLatest(GET_NY_TIMES_ARTICLES, fetchNyTimesArticles);
}


export default function* NyTimesSaga() {
    yield all([
        fetchNyTimesArticlesFlow(),
    ]);
}