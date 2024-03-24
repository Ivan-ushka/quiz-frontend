export interface IQuizForm {
    code: string;
    title: string,
    description: string,
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