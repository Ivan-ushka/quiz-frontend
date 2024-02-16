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

    isStartInfoDataValidation = false;

    setIsStartInfoDataValidation(bool) {
        this.isStartInfoDataValidation = bool;
    }

    setStartInfoData(topic, numbOfQuestions, numbPossibleOptions) {
        this.quiz.topic = topic;
        this.quiz.numbOfQuestions = numbOfQuestions;
        this.quiz.numbPossibleOptions = numbPossibleOptions;
    }

    error = '';

    constructor() {
        makeAutoObservable(this)
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

    addOption(arr) {
        this.quiz.data.push(arr)
    }


}