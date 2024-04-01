import $api from "../http";
import {IQuizForm} from "../pages/createQuiz/interfaces";


export default class QuizService{
    static async saveQuiz(quiz: IQuizForm) {
        return $api.post('/set-quiz',{quiz})
    }

    static async getAuthQuizzes() {
        return $api.get('/auth-quizzes')
    }

    static async getAllQuizzes() {
        return $api.get('/all-quizzes')
    }


}