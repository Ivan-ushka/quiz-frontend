import QuizService from "../services/QuizService";

export const deleteQuiz = async (quizId: string): Promise<any> => {
    try {
        return await QuizService.deleteQuiz(quizId);
    } catch (error) {
        console.error('Ошибка при удалении квиза:', error);
        throw error;
    }
};