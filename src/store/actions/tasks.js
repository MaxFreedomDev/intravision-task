import { apiService } from "../../index";

export const tasksLoading = () => {
  return {
    type: "TASKS_LOADING",
  };
};
export const tasksRequest = (tasks) => {
  return {
    type: "TASKS_REQUEST",
    payload: tasks,
  };
};
export const taskRequest = (task) => {
  return {
    type: "TASK_REQUEST",
    payload: task,
  };
};
export const setTaskId = (id) => {
  return {
    type: "SET_TASK_ID",
    payload: id,
  };
};
export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const getTasks = () => (dispatch) => {
  dispatch(tasksLoading());
  apiService
    .getTasksRequest()
    .then((tasks) => {
      dispatch(tasksRequest(tasks.value));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};

export const getTask = (id) => (dispatch) => {
  apiService
    .getTaskRequest(id)
    .then((task) => {
      dispatch(taskRequest(task));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};

export const createTask = (payload) => (dispatch) => {
  apiService
    .createTask(payload)
    .then((id) => {
      dispatch(getTasks);
      dispatch(setTaskId(id));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};
export const updateTask = (payload) => (dispatch) => {
  apiService
    .updateTask(payload)
    .then(() => {
      dispatch(getTask(payload.id));
      dispatch(getTasks());
    })
    .catch((err) => {
      dispatch(setError(err.response.data.title));
    });
};
