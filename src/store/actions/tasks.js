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

export const getTasks = () => (dispatch) => {
  apiService
    .getTasksRequest()
    .then((tasks) => {
      dispatch(tasksRequest(tasks));
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
