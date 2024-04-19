import PersonService from "./PersonService";
import {IFullUserData} from "../pages/profile/interfaces";
import {AxiosResponse} from "axios";

export const updateUserData = async (userData: IFullUserData): Promise<any> => {
    try {
        const response: AxiosResponse = await PersonService.updateUserData(userData);
        const data = response.data;
        return data.user;
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

export const getUserData = async (): Promise<any> => {
    try {
        const response = await PersonService.getUserData();
        const data = response.data;
        return data.user;
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};