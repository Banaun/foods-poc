import http from "../http-common";

class ProcessFileService {
  process(filename) {
    return http.get("/process/" + filename);
  }
}

export default new ProcessFileService();