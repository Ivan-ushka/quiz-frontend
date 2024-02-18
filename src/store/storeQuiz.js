import {makeAutoObservable} from "mobx";

export default class StoreQuiz {
    quiz = {
        id: '',
        topic: '',
        numbOfQuestions: 0,
        numbPossibleOptions: 0,
        data: [{
            id: 0,
            questionText: '',
            options: [{
                id: 0,
                optionText: '',
                isCorrect: false,
            }],
        }]
    };

    error = '';
    isStartInfoDataValidation = false;
    isQuestionsValidation = false;

    constructor() {
        makeAutoObservable(this)
    }
    setIsStartInfoDataValidation(bool) {
        this.isStartInfoDataValidation = bool;
    }

    setIsQuestionsValidation(bool) {
        this.isQuestionsValidation = bool;
    }

    setStartInfoData(topic, numbOfQuestions, numbPossibleOptions) {
        this.quiz = {
            topic,
            numbOfQuestions,
            numbPossibleOptions,
            data: Array.from({ length: numbOfQuestions }, (_, i) => ({
                id: i,
                questionText: '',
                options: Array.from({ length: numbPossibleOptions }, (_, index) => ({
                    id: index,
                    optionText: '',
                    isCorrect: false,
                })),
            })),
        };
    }

    setQuiz(quiz) {
        this.quiz = {...quiz};
    }

    setTopic(topic) {
        this.quiz.topic = topic;
    }

    setNumbPossibleOptions(numbPossibleOptions) {
        this.quiz.numbPossibleOptions = numbPossibleOptions;
    }

    setNumbOfQuestions(numbOfQuestions) {
        this.quiz.numbOfQuestions = numbOfQuestions;
    }

    setQuestionIndex(index){
        this.quiz.data[index].id = index;
    }

    setQuestionText(indexQuestion, questionText){
        this.quiz.data[indexQuestion].questionText = questionText;
    }

    addOption(arr) {
        this.quiz.data.push(arr)
    }

    setOption(indexQuestion, optionsArr){
        this.quiz.data[indexQuestion].options = optionsArr;
    }
}