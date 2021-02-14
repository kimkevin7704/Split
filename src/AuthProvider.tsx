import React from 'react'

export const AuthContext = React.createContext({});

interface AuthProviderProps {

}

//access current user anywhere in application
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    return (<AuthContext.Provider value={{}}>{children}</AuthContext.Provider>);
}