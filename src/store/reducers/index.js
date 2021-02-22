import { combineReducers } from "redux";
import { enumsReducer } from "./enums-reducer";
import { tasksReducer } from "./tasks-reducer";

export const rootReducer = combineReducers({
  enums: enumsReducer,
  tasks: tasksReducer,
});
