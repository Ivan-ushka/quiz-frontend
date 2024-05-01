import {IQuizForm} from "../pages/createQuiz/interfaces";
import QuizService from "../http/QuizService";
import {setCode} from "./quizSlice";
import {AppThunk} from "./store";

export const saveQuiz = (quiz: IQuizForm):AppThunk => async (dispatch) => {
    try {
        const response = await QuizService.saveQuiz(quiz);
        console.log(response);
        console.log(response.data.rows[0].quizid)
        dispatch(setCode(response.data.rows[0].quizid))
    } catch (error: any) {
       console.log(error)
    }
};

export const updateQuiz = (quiz: IQuizForm):AppThunk => async (dispatch) => {
    try {
        const response = await QuizService.updateQuiz(quiz);
        console.log(response);
        console.log(response.data.rows[0].quizid)
        dispatch(setCode(response.data.rows[0].quizid))
    } catch (error: any) {
        console.log(error)
    }
};

