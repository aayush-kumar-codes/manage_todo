import { getTasksSuccess,getTasksRequest, getTasksError, addTaskSuccess, addTaskError } from '../Actions/index';
import axiosCall from "../../services";
import { call, put } from "redux-saga/effects";
import { CONFIG } from "../../config";

export function* getTaks(action) {
    try {
        const response = yield call(
            axiosCall,
            "GET",
            `/task`,
            action.payload
        );
        if (response) {
            yield put(getTasksSuccess({ response: response }));
        } else {
            yield put(getTasksError({ error: "Invalid login details" }));
        }
    } catch (error) {
        yield put(getTasksError({ error: "Invalid login details" }));

    }
}


export function* addTask(action) {
    try {
        console.log("i am here");
        const response = yield call(
            axiosCall,
            "POST",
            `/task`,
            action.payload
        );
        if (response) {
            yield put(getTasksRequest())
            yield put(addTaskSuccess({ response: response }));
        } else {
            yield put(addTaskError({ error: "Invalid login details" }));
        }
    } catch (error) {
        yield put(addTaskError({ error: "Invalid login details" }));

    }
}

