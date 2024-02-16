import {makeAutoObservable} from "mobx";

export default class StoreQuiz {
    quiz = {
        id: '',
        topic: '',
        numbOfQuestions: 0,
        numbPossibleOptions: 0,
        data: [{
            id: 0,
            question: '',
            options: [{
                current: '',
                isCorrect: false,
            }],
        }]
    }

    isValid = false;
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

    setNumbPossibleOptions(numbPossibleOptions){
        this.quiz.numbPossibleOptions = numbPossibleOptions;
    }

    setNumbOfQuestions(numbOfQuestions){
        this.quiz.numbOfQuestions = numbOfQuestions;
    }

    addOption(arr){
        this.quiz.data.push(arr)
    }



}