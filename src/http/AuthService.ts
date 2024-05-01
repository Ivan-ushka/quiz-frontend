import $api from "../http";

export default class AuthService{

    static async registration(name: string, pwd: string){
        return $api.post('/registration', {name, pwd})
    }

    static async login(name: string, pwd: string){
        return $api.post('/login', {name, pwd})
    }

    static async logout(){
        return $api.post('/logout')
    }

    static async checkAuth(){
        return $api.get('/refresh')
    }

}