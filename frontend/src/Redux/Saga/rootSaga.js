import { takeLatest, all } from "redux-saga/effects";
import * as constants from "../constant";

import { login} from "./login";
import { signUp } from "./signup"
import {getTaks, addTask} from "./tasks"
function* watchActions() {
    yield takeLatest(constants.LOGIN_REQUEST, login);
    yield takeLatest(constants.SIGNUP_REQUEST, signUp);
    yield takeLatest(constants.REQUEST_GET_ALL_TASKS, getTaks);
    yield takeLatest(constants.REQUEST_ADD_TASKS, addTask);
}

export default function* rootSaga() {
    yield all([watchActions()]);
}
