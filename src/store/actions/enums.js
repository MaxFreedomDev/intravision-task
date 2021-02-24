import { apiService } from "../../index";

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
      console.log(err);
    });
};

export const getStatuses = () => (dispatch) => {
  apiService
    .getStatusesRequest()
    .then((data) => {
      dispatch(statusesRequest(data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getUsers = () => (dispatch) => {
  apiService
    .getUsersRequest()
    .then((users) => {
      dispatch(usersRequest(users));
    })
    .catch((err) => {
      console.log(err);
    });
};
