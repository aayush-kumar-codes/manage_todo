import { loginSuccess, loginError, socialLoginSuccess, socialLoginError, getUserSuccess, getUserError } from '../Actions/index';
import axiosCall from "../../services";
import { call, put } from "redux-saga/effects";
// import { CONFIG } from "../../config";

export function* login(action) {
    let config = {
        headers: {
            "Content-Type": "application/json",
        }
    };
    try {
        const response = yield call(
            axiosCall,
            "POST",
            `/login`,
            { ...action.payload },
            config
        );
        if (response) {
            localStorage.setItem('token', response?.data?.token)
            yield put(loginSuccess({ response: response?.data }));
        } else {
            yield put(loginError({ error: "Invalid login details" }));
        }
    } catch (error) {
        yield put(loginError({ error: "Invalid login details" }));

    }
}

// export function* getUsers(action) {
//     try {
//         const response = yield call(
//             axiosCall,
//             "GET",
//             `api/all-users/`,
//             { ...action.payload }
//         );
//         if (response) {
//             yield put(getUserSuccess({ response: response?.data }));
//         } else {
//             yield put(getUserError({ error: "Invalid login details" }));
//         }
//     } catch (error) {
//         yield put(getUserError({ error: "Invalid login details" }));
//     }
// }