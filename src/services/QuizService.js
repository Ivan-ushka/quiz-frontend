import $api from "../http";


export default class QuizService{
    static async setQuiz(quiz) {
        return $api.post('/setQuiz', quiz)
    }

}