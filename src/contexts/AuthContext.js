import { createContext, useReducer } from 'react';
import axios from 'axios';
import { authReducer } from '../reducers/authReducer';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constant';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            return response.data;
        } catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };
    //context data
    const authContextData = { loginUser };
    // return provider
    return <AuthContextProvider value={authContextData}>{children}</AuthContextProvider>;
};

export default AuthContextProvider;
