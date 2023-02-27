/* eslint-disable camelcase */
import {
    all,
    call,
    put,
    takeLatest,
} from "redux-saga/effects";
import api from "../../utils/api";
import {
    loginSuccess,
    loginFailure,
    logoutSuccess,
    registerSuccess,
    registerFailure,
} from "./actions";


import {
    LOGIN,
    LOGOUT, PANIC_REQUEST,
    REGISTER, SET_PASSWORD,
} from "./constant";

export function* fetchRegister({payload}) {
    try {
        const response = yield call(api(null, null, false)
                .post, `/auth/register`,
            payload
        );

        yield put(registerSuccess({token: response.token, user: response}))

    } catch (e) {
        yield put(registerFailure(e.response.data));
    }
}

export function* fetchLogin({payload}) {
    try {
        const response = yield call(
            api(null, null, false).post,
            `/auth/login`,
            payload
        );
        yield put(loginSuccess({token: response.token, user: response}))
        localStorage.setItem("token", response.token);

    } catch(e) {
        yield put(loginFailure(e.response.data));
        localStorage.clear();
    }
}



export function* fetchLogout() {
    yield put(logoutSuccess());
    localStorage.removeItem('token')
}

/**
 *
 * Saga flow
 */

export function* loginFlow() {
    yield takeLatest(LOGIN, fetchLogin);
}

export function* registerFlow() {
    yield takeLatest(REGISTER, fetchRegister);
}

export function* logoutFlow() {
    yield takeLatest(LOGOUT, fetchLogout);
}

export default function* AuthSaga() {
    yield all([
        loginFlow(),
        registerFlow(),
        logoutFlow(),
    ]);
}
