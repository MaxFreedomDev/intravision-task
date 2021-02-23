import * as EnumsActionCreators from "./enums";
import * as TasksActionCreators from "./tasks";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...EnumsActionCreators,
  ...TasksActionCreators,
};
