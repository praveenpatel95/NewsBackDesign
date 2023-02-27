import {call, put, takeLatest, all} from 'redux-saga/effects'
import api from "../../utils/api";

import {
    GET_THE_GUARDIAN_ARTICLES,
    GET_THE_GUARDIAN_SOURCES
} from "./constant";
import {
    getTheGuardianArticlesFailure,
    getTheGuardianArticlesSuccess,
    getTheGuardianSourcesFailure,
    getTheGuardianSourcesSuccess
} from "./actions";

export function* fetchTheGuardianSources() {
    try {
        const response = yield call(api().get, `/articles/the-guardian/sections?page=10`);
        if (response) {
            yield put(getTheGuardianSourcesSuccess(response?.response?.results));
        }
    } catch (e) {
        yield put(getTheGuardianSourcesFailure(e.message));
    }
}

export function* fetchTheGuardianArticles({payload}) {
    try {
        const response = yield call(api().get, `/articles/the-guardian${payload}`);
        if (response) {
            yield put(getTheGuardianArticlesSuccess(response?.response));
        }
    } catch (e) {
        yield put(getTheGuardianArticlesFailure(e.message));
    }
}

export function* fetchTheGuardianSourcesFlow() {
    yield takeLatest(GET_THE_GUARDIAN_SOURCES, fetchTheGuardianSources);
}

export function* fetchTheGuardianArticlesFlow() {
    yield takeLatest(GET_THE_GUARDIAN_ARTICLES, fetchTheGuardianArticles);
}

export default function* TheGuardianSaga() {
    yield all([
        fetchTheGuardianSourcesFlow(),
        fetchTheGuardianArticlesFlow(),
    ]);
}