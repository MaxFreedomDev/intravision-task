import { apiService } from "../../index";

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

export const getTasks = () => (dispatch) => {
  apiService
    .getTasksRequest()
    .then((tasks) => {
      dispatch(tasksRequest(tasks.value));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTask = (id) => (dispatch) => {
  apiService
    .getTaskRequest(id)
    .then((task) => {
      dispatch(taskRequest(task));
    })
    .catch((err) => {
      console.log(err);
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
      console.log(err);
    });
};
export const updateTask = (payload) => (dispatch) => {
  apiService
    .updateTask(payload)
    .then(() => {
      dispatch(getTasks);
      dispatch(getTask(payload.id));
    })
    .catch((err) => {
      console.log(err);
    });
};
