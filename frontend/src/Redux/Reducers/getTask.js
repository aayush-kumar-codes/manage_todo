import * as constants from "../constant";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const GetTasks = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_GET_ALL_TASKS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.SUCCESS_GET_ALL_TASKS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.ERROR_GET_ALL_TASKS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        ...action.payload.response,
      };
    default:
      return {
        ...state,
      };
  }
};
export default GetTasks;
