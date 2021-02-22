const initialState = {
  priorities: [],
  statuses: [],
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
    default:
      return state;
  }
};
