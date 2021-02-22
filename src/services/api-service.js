import axios from "axios";

export default class ApiService {
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
          "http://intravision-task.test01.intravision.ru/api/512d5c22-bdac-4b97-bedb-c37aab2756c5/",
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
  getTasksRequest() {
    return this.getInitializedApi("tasks", "get");
  }
  getTaskRequest(id) {
    return this.getInitializedApi(`tasks/${id}`, "get");
  }
}
