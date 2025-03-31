import { useState, useEffect } from "react";
import UserService from "../http/services/UserService";

const useUserById = (userId: string) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState<Error | null>();

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                try {
                    const response = await UserService.getUserById(userId);
                    setUser(response.data.user);
                } catch (e) {
                    setError(e as Error);
                }
            }
        };
        fetchUser();
    }, [userId]);

    return { user, error };
};

export default useUserById;
