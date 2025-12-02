import api from './api.config';

export interface ProductType {
    id: number;
    name: string;
    category: string;
    price: number;
}

export const productService = {
    async getAllProducts(): Promise<ProductType[]> {
        try {
            const response = await api.get<{ responseObject: ProductType[] }>('/api/product');
            return response.data.responseObject;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    async getProductById(id: number): Promise<ProductType> {
        try {
            const response = await api.get<{ responseObject: ProductType }>(`/api/product/${id}`);
            return response.data.responseObject;
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    }
};
