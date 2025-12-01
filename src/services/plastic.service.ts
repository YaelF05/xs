import api from './api.config';

export interface PlasticType {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const plasticService = {
    async getAllPlastics(): Promise<PlasticType[]> {
        try {
            const response = await api.get<{ responseObject: PlasticType[] }>('/api/plastic');
            return response.data.responseObject;
        } catch (error) {
            console.error('Error fetching plastics:', error);
            throw error;
        }
    },

    async getPlasticById(id: number): Promise<PlasticType> {
        try {
            const response = await api.get<{ responseObject: PlasticType }>(`/api/plastic/${id}`);
            return response.data.responseObject;
        } catch (error) {
            console.error(`Error fetching plastic ${id}:`, error);
            throw error;
        }
    }
};
