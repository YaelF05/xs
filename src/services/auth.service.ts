import { LoginResponse, UserRoles } from '@/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api.config';

export const authService = {
    async login(email: string, password: string) {
        try {
            const response = await api.post<LoginResponse>('/api/auth/login', { email, password });

            if (response.data && response.data.responseObject) {
                const { accessToken, type, name } = response.data.responseObject;
                await AsyncStorage.setItem('token', accessToken);
                if (name) {
                    await AsyncStorage.setItem('userName', name);
                }

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
                    userRole = UserRoles.PESAJE;
                }

                await AsyncStorage.setItem('userRole', String(userRole));

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
        await AsyncStorage.multiRemove(['token', 'userName', 'userRole']);
    },

    async getUserName(): Promise<string | null> {
        return await AsyncStorage.getItem('userName');
    },

    async getUserRole(): Promise<UserRoles | null> {
        const role = await AsyncStorage.getItem('userRole');
        return role ? Number(role) as UserRoles : null;
    },

    async getToken(): Promise<string | null> {
        return await AsyncStorage.getItem('token');
    },
};