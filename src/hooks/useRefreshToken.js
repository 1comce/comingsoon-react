import axiosPublic from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {
        try {
            const response = await axiosPublic.get('/auth/refresh', {
                withCredentials: true,
            });

            setAuth((prev) => {
                return { ...prev, accessToken: response.data.accessToken, username: response.data.username };
            });

            return response.data.accessToken;
        } catch (error) {
            console.log(error.message);
        }
    };
    return refresh;
};

export default useRefreshToken;
