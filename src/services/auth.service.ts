import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api.config';

export const authService = {
    async login(email: string, password: string) {
        try {
            const response = await api.post('/api/auth/login', { email, password });
            if (response.data && response.data.token) {
                await AsyncStorage.setItem('token', response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async logout() {
        await AsyncStorage.removeItem('token');
    },
};
