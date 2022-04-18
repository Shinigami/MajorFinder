import http from "../http-common";
class Assessmentservice {
    getAllQuestions() {
        return http.get("/assessment");
    }
}
export default Assessmentservice();