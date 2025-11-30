import { LoginResponse, UserRoles } from '@/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api.config';

export const authService = {
    async login(email: string, password: string) {
        try {
            console.log('Attempting login with:', email);
            const response = await api.post<LoginResponse>('/api/auth/login', { email, password });
            console.log('Login response status:', response.status);
            console.log('Login response data:', JSON.stringify(response.data, null, 2));

            if (response.data && response.data.responseObject) {
                const { accessToken, type, name } = response.data.responseObject;
                console.log('Saving token:', accessToken);
                await AsyncStorage.setItem('token', accessToken);
                if (name) {
                    await AsyncStorage.setItem('userName', name);
                }

                // Map string type to UserRoles enum
                let userRole: UserRoles;
                const typeLower = type.toLowerCase();
                if (typeLower === 'admin') {
                    userRole = UserRoles.ADMIN;
                } else if (typeLower === 'mercadito') {
                    userRole = UserRoles.MERCADITO;
                } else if (typeLower === 'pesaje') {
                    userRole = UserRoles.PESAJE;
                } else {
                    console.warn('Unknown user type:', type);
                    userRole = UserRoles.PESAJE; // Default fallback
                }

                // Return normalized user object
                return {
                    user: {
                        ...response.data.responseObject,
                        type: userRole,
                    }
                };
            }

            throw new Error('Invalid response structure');
        } catch (error) {
            console.error('Login error in service:', error);
            throw error;
        }
    },

    async logout() {
        await AsyncStorage.multiRemove(['token', 'userName']);
    },

    async getUserName(): Promise<string | null> {
        return await AsyncStorage.getItem('userName');
    },
};