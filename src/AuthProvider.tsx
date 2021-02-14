import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react'

type User = null | { username: string };

export const AuthContext = React.createContext<{
    user: User,
    login: () => void
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {}
});

interface AuthProviderProps {}

//access current user anywhere in application
//THIS IS WHERE IS REPLACE WITH REDUX LATER
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    return (<AuthContext.Provider value={{
        user,
        login: () => {
            const fakeUser = { username: "bob" };
            setUser(fakeUser);
            AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
            AsyncStorage.removeItem("user");
        }
    }}
    >
        {children}
    </AuthContext.Provider>);
}