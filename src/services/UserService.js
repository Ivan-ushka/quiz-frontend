import $api from "../http";
import {AxiosResponse} from "axios";

export default class UserService{
    static fetchUsers(){
        return $api.get('/users')
    }
}