import $api from "../index";
import {IFullUserData} from "../../pages/profile/interfaces";

export default class UserService {
    static async checkPassword(name: string, pwd: string){
        return $api.post('/checkPwd', {name, pwd})
    }

    static async updateUserData(updatedFields: IFullUserData){
        return $api.patch('/update/user', updatedFields)
    }

    static async getUserData(){
        return $api.get('/user')
    }

    static async getUserById(userId: string){
        return $api.get(`/user/:${userId}`)
    }

}