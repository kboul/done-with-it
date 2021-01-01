import { createContext, useContext } from 'react';

interface User {
    email: string;
    iat: number;
    name: string;
    userId: number;
}

interface ContextType {
    user: User;
    setUser: (user: Object | null) => void;
}

const AuthContext = createContext<ContextType | any>({
    user: {},
    setUser: () => {}
});

const useAuthContext = () => useContext<ContextType>(AuthContext);

export { AuthContext, useAuthContext };
