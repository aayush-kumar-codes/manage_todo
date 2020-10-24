import { createAction } from "redux-actions";
import * as constant from "../constant";

export const loginRequest = createAction(constant.LOGIN_REQUEST);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS);
export const loginError = createAction(constant.LOGIN_ERROR);
export const logOut = createAction(constant.LOGOUT);

export const signUpRequest = createAction(constant.SIGNUP_REQUEST);
export const signUpSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signUpError = createAction(constant.SIGNUP_ERROR);

export const getTasksRequest = createAction(constant.REQUEST_GET_ALL_TASKS);
export const getTasksSuccess = createAction(constant.SUCCESS_GET_ALL_TASKS);
export const getTasksError = createAction(constant.SUCCESS_GET_ALL_TASKS);

export const addTaskRequest = createAction(constant.REQUEST_ADD_TASKS);
export const addTaskSuccess = createAction(constant.SUCCESS_ADD_TASKS);
export const addTaskError = createAction(constant.ERROR_ADD_TASKS);
