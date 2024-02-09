import $api from "../http";

export default class AuthService{
    static async registration(name, pwd){
        return $api.post('/registration', {name, pwd})
    }

    static async confirmRegistration(name, age, sex, email, country, city, phone){
        return $api.post('/confirmreg', {name, age, sex, email, country, city, phone})
    }

    static async login(name, pwd){
        return $api.post('/login', {name, pwd})
    }

    static async logout(){
        return $api.post('/logout')
    }

    static async checkPassword(name, pwd){
        return $api.post('/checkPwd', {name, pwd})
    }




}