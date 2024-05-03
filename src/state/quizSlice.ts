import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IQuizForm} from "../pages/createQuiz/interfaces";

interface QuizState {
    quiz: IQuizForm;
}

const initialState: QuizState = {
    quiz: {
        quizID: '',
        userID: 0,
        title: '',
        description: '',
        questions: [
            {
                question: '',
                answers: [
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                ],
            },
        ],
    },
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuiz(state, action: PayloadAction<IQuizForm>) {
            state.quiz = action.payload;
        },

        updateQuestion(state, action: PayloadAction<{ questionIndex: number; question: string }>) {
            const {questionIndex, question} = action.payload;
            state.quiz.questions[questionIndex].question = question;
        },

        updateAnswer(
            state,
            action: PayloadAction<{ questionIndex: number; answerIndex: number; answer: string }>
        ) {
            const {questionIndex, answerIndex, answer} = action.payload;
            state.quiz.questions[questionIndex].answers[answerIndex].answer = answer;
        },

        updateAnswerCorrectness(
            state,
            action: PayloadAction<{ questionIndex: number; answerIndex: number; isCorrect: boolean }>
        ) {
            const {questionIndex, answerIndex, isCorrect} = action.payload;
            state.quiz.questions[questionIndex].answers[answerIndex].isCorrect = isCorrect;
        },

        addQuestion(state) {
            state.quiz.questions.push({
                question: '',
                answers: [
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                    {answer: '', isCorrect: false},
                ],
            });
        },

        deleteQuestion(state, action: PayloadAction<number>) {
            const questionIndex = action.payload;
            if (state.quiz.questions.length > 1)
                state.quiz.questions.splice(questionIndex, 1);
        },

        updateTitle(state, action: PayloadAction<string>) {
            state.quiz.title = action.payload;
        },

        updateDescription(state, action: PayloadAction<string>) {
            state.quiz.description = action.payload;
        },

        addOption(state, action: PayloadAction<number>) {
            const questionIndex = action.payload;
            state.quiz.questions[questionIndex].answers.push({answer: '', isCorrect: false});
        },

        deleteOption(state, action: PayloadAction<{ questionIndex: number; answerIndex: number }>) {
            const {questionIndex, answerIndex} = action.payload;
            state.quiz.questions[questionIndex].answers.splice(answerIndex, 1);
        },
        setUserIDtoQuiz(state, action: PayloadAction<number>){
            state.quiz.userID = action.payload;
        },
        setCode(state, action: PayloadAction<string>){
            state.quiz.quizID = action.payload;
        }
    },
});

export const {
    setQuiz,
    updateQuestion,
    updateAnswer,
    updateAnswerCorrectness,
    addQuestion,
    deleteQuestion,
    updateTitle,
    updateDescription,
    addOption,
    deleteOption,
    setUserIDtoQuiz,
    setCode,
} = quizSlice.actions;

export default quizSlice.reducer;