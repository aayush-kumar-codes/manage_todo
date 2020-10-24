import { combineReducers } from "redux";

// importing all reducers are here
import login from './login'
import signUp from './signup'
import getTask from './getTask'
import addTask from './addTask'

export default combineReducers({
    login: login,
    signUp: signUp,
    tasks: getTask,
    addTask: addTask
});
