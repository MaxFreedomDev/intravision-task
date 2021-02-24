const initialState = {
  priorities: [],
  statuses: [],
  users: [],
  error: null,
};

export const enumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRIORITIES_REQUEST": {
      return { ...state, priorities: action.payload };
    }
    case "STATUSES_REQUEST": {
      return { ...state, statuses: action.payload };
    }
    case "USERS_REQUEST": {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};
