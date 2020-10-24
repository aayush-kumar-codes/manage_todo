import  {signUpSuccess, signUpError} from '../Actions/index';
import axiosCall from "../../services";
import { call, put } from "redux-saga/effects";
import { CONFIG } from "../../config";

export function* signUp(action) {
  console.log(action.payload,"payyyy")
  try {
    const response = yield call(
      axiosCall,
      "POST",
      `/register/`,
      action.payload
    );
    if (response) {
    //   let loginUser = response.data && response.data.data && response.data.data.token ;
    //   localStorage.setItem("token", loginUser);
      yield put(signUpSuccess({ response: response?.data }));
    }else{
      yield put(signUpError({ error: "Invalid login details" }));
    }
  } catch (error) {
    yield put(signUpError({ error: "Invalid login details" }));

  }
}


