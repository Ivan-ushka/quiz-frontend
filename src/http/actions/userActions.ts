import UserService from "../services/UserService";
import {IFullUserData} from "../../pages/profile/interfaces";
import {AxiosResponse} from "axios";
import $api from "../index";

export const updateUserData = async (userData: IFullUserData): Promise<any> => {
    try {
        const response: AxiosResponse = await UserService.updateUserData(userData);
        const data = response.data;
        return data.user;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

export const getUserData = async (): Promise<any> => {
    try {
        const response = await UserService.getUserData();
        const data = response.data;
        return data.user;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

export const getUserById = async (userId: string): Promise<any> => {
    try {
        const response = await UserService.getUserById(userId);
        const data = response.data;
        return data.user;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

export const changePwd = async (id: number, pwd: string, newPwd: string): Promise<any> => {
    try {
        const response = await UserService.changePassword(id, pwd, newPwd);
        const data = response.data;
        return data.message;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};