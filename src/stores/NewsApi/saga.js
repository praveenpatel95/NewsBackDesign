import {call, put, takeLatest, all} from 'redux-saga/effects'
import api from "../../utils/api";
import {
    getNewsAPIArticlesFailure,
    getNewsAPIArticlesSuccess,
    getNewsAPISourcesFailure,
    getNewsAPISourcesSuccess
} from "./actions";
import {GET_NEWS_API_ARTICLES, GET_NEWS_API_SOURCES} from "./constant";

export function* fetchNewsApiSources() {
    try {
        const response = yield call(api().get, `/articles/news-api/sources`);
        if (response) {
            yield put(getNewsAPISourcesSuccess(response?.sources));
        }
    } catch (e) {
        yield put(getNewsAPISourcesFailure(e.message));
    }
}

export function* fetchNewsApiArticles({payload}) {
    try {
        const response = yield call(api().get, `/articles/news-api${payload}`);
        if (response) {
            yield put(getNewsAPIArticlesSuccess(response));
        }
    } catch (e) {
        yield put(getNewsAPIArticlesFailure(e.message));
    }
}

export function* fetchNewsApiSourcesFlow() {
    yield takeLatest(GET_NEWS_API_SOURCES, fetchNewsApiSources);
}

export function* fetchNewsApiArticlesFlow() {
    yield takeLatest(GET_NEWS_API_ARTICLES, fetchNewsApiArticles);
}

export default function* newsAPISaga() {
    yield all([
        fetchNewsApiSourcesFlow(),
        fetchNewsApiArticlesFlow(),
    ]);
}