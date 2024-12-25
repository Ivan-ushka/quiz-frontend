import {IQuizForm} from "../pages/createQuiz/interfaces";
import QuizService from "../http/services/QuizService";
import {setCode} from "./quizSlice";
import {AppThunk} from "./store";

export const saveQuiz = (quiz: IQuizForm):AppThunk => async (dispatch) => {
    try {
        const response = await QuizService.saveQuiz(quiz);
        console.log(response);
        dispatch(setCode(response.data.quizid))
    } catch (error: any) {
       console.log(error)
    }
};

export const updateQuiz = (quiz: IQuizForm):AppThunk => async (dispatch) => {
    try {
        const response = await QuizService.updateQuiz(quiz);
        console.log(response);
        dispatch(setCode(response.data.quizid))
    } catch (error: any) {
        console.log(error)
    }
};

