export interface IQuizForm {
    quizId: string;
    title: string,
    description: string,
    userId: number,
    questions: IQuestion[],
}

export interface IQuestion{
    question: string,
    answers: IAnswer[],
    [key: string]: any,
}

export interface IAnswer{
    answer: string,
    isCorrect: boolean,
    [key: string]: any,

}