import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import ApiService from "./services/api-service";
import { Provider } from "react-redux";
import { store } from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";

export const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
