import { createContext, useReducer, useState, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';
import { LOCAL_STORAGE_TOKEN_NAME } from './constant';
import setAuthToken from '../utils/setAuthToken';
import axios from '../api/axios';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });
    const loadUser = async () => {
        if (auth.accessToken) {
            setAuthToken(auth.accessToken);
        }
        try {
            const response = await axios.get('/auth');
            if (response.data.success) {
                dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: true, user: response.data.username } });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } });
        }
    };
    // useEffect(() => loadUser(), []);
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post('/auth/login', userForm, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };
    const authContextData = { auth, setAuth, loginUser, authState, dispatch, persist, setPersist };
    return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};
export default AuthContext;
