const initialState = {
  tasks: [],
  task: {},
  error: null,
  loading: false,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS_REQUEST": {
      return { ...state, tasks: action.payload, loading: false };
    }
    case "TASK_REQUEST": {
      return { ...state, task: action.payload, loading: false };
    }
    default:
      return state;
  }
};
