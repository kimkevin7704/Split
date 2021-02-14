import React from 'react'
import { AuthProvider } from './AuthProvider';
import { Routes } from './navigations/Routes';

interface ProvidersProps {}


//wrap entire APP in AuthProvider (Routes is the entire app right now)
//we can add more providers here if needed
export const Providers: React.FC<ProvidersProps> = ({}) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}