import $api from "../index";
import {IFullUserData} from "../../pages/profile/interfaces";

export default class UserService {
    static async updateUserData(updatedFields: IFullUserData){
        return $api.patch('/update/user', updatedFields)
    }

    static async getUserData(){
        return $api.get('/user')
    }

    static async getUserById(userId: string){
        return $api.get(`/user/:${userId}`)
    }

    static async changePassword(id: number, pwd: string, newPwd: string){
        return $api.patch('/changePwd', {id, pwd, newPwd})
    }
}