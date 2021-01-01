import { createContext, useContext } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';

import authStorage from './storage';

interface User {
    email: string;
    iat: number;
    name: string;
    userId: number;
}

interface ContextType {
    user: User;
    setUser: (user: Object | null) => void;
    logout: () => void;
}

const AuthContext = createContext<ContextType | any>({ user: {} });

const useAuthContext = () => {
    const { user, setUser } = useContext<ContextType>(AuthContext);

    const login = (token: string) => {
        const currentUser = jwtDecode<JwtPayload>(token);
        setUser(currentUser);
        authStorage.storeToken(token);
    };

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    };

    return { user, login, logout };
};

export { AuthContext, useAuthContext };
