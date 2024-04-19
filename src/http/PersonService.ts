import $api from "../http";
import {IFullUserData} from "../pages/profile/interfaces";

export default class PersonService{
    static async checkPassword(name: string, pwd: string){
        return $api.post('/checkPwd', {name, pwd})
    }

    static async updateUserData(updatedFields: IFullUserData){
        return $api.patch('/user/update', updatedFields)
    }

    static async getUserData(){
        return $api.get('/user')
    }

}