import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/saga";
import newsAPISaga from "./NewsApi/saga";
import TheGuardianSaga from "./TheGuardian/saga";
import NyTimesSaga from "./NyTimes/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        newsAPISaga(),
        TheGuardianSaga(),
        NyTimesSaga(),
    ]);
}
