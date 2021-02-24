import { apiService } from "../../index";
import { setError } from "./tasks";

const prioritiesRequest = (priorities) => {
  return {
    type: "PRIORITIES_REQUEST",
    payload: priorities,
  };
};
const statusesRequest = (statuses) => {
  return {
    type: "STATUSES_REQUEST",
    payload: statuses,
  };
};
const usersRequest = (users) => {
  return {
    type: "USERS_REQUEST",
    payload: users,
  };
};

export const getPriorities = () => (dispatch) => {
  apiService
    .getPrioritiesRequest()
    .then((data) => {
      dispatch(prioritiesRequest(data));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};

export const getStatuses = () => (dispatch) => {
  apiService
    .getStatusesRequest()
    .then((data) => {
      dispatch(statusesRequest(data));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};
export const getUsers = () => (dispatch) => {
  apiService
    .getUsersRequest()
    .then((users) => {
      dispatch(usersRequest(users));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};
