const initialState = {
  tasks: [],
  task: null,
  taskId: null,
  error: null,
  loading: false,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS_LOADING": {
      return { ...state, loading: true };
    }
    case "TASKS_REQUEST": {
      return { ...state, tasks: action.payload, loading: false };
    }
    case "TASK_REQUEST": {
      return { ...state, task: action.payload, loading: false };
    }
    case "SET_TASK_ID": {
      return { ...state, taskId: action.payload, loading: false };
    }
    case "SET_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
};
