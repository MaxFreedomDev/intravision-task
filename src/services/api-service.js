import axios from "axios";

export default class ApiService {
  key = "512d5c22-bdac-4b97-bedb-c37aab2756c5";
  baseUrl = "http://intravision-task.test01.intravision.ru/";
  getInitializedApi(url, method = "get", params = null, is_api = true) {
    return new Promise((resolve, reject) => {
      let data = method === "get" ? { params } : { data: params };
      return axios({
        headers: {
          "Access-Control-Allow-Methods": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method,
        baseURL:
          this.baseUrl +
          `${is_api ? "api/" : "odata/"}` +
          `${is_api ? this.key : ""}`,
        url,
        ...data,
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getPrioritiesRequest() {
    return this.getInitializedApi("Priorities", "get");
  }
  getStatusesRequest() {
    return this.getInitializedApi("Statuses", "get");
  }
  getUsersRequest() {
    return this.getInitializedApi("Users", "get");
  }
  getTasksRequest() {
    return this.getInitializedApi(
      "tasks",
      "get",
      { tenantguid: this.key },
      false
    );
  }
  getTaskRequest(id) {
    return this.getInitializedApi(`Tasks/${id}`, "get");
  }
  createTask(payload) {
    return this.getInitializedApi("Tasks", "post", payload);
  }
  updateTask(payload) {
    return this.getInitializedApi("Tasks", "put", payload);
  }
}
