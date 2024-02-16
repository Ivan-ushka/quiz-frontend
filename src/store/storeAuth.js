import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService"
import axios from "axios";
import {API_URL} from "../http";

export default class StoreAuth {
    user = {}
    isAuth = false;
    error = '';

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this.user = user;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    async login(name, pwd) {
        try {
            const response = await AuthService.login(name, pwd)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            this.error = e.response?.data?.message
            console.log(e.response?.data?.message);
        }
    }

    async registration(name, pwd) {
        try {
            const response = await AuthService.registration(name, pwd)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            this.error = e.response?.data?.message
            console.log(e.response?.data?.message);
        }
    }

    async confirmRegistration(name, age, sex, email, country, city, phone){
        try {
            const response = await AuthService.confirmRegistration(name, age, sex, email, country, city, phone)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            this.error = e.response?.data?.message
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            this.error = e.response?.data?.message
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}