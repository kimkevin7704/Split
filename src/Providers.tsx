import React from 'react'
import { AuthProvider } from './AuthProvider';
import { Routes } from './navigations/Routes';

interface ProvidersProps {

}

export const Providers: React.FC<ProvidersProps> = ({}) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}