import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3030/api';

export interface PlasticType {
  id: number;
  name: string;
  pricePerKg: number;
}

export const getPlastics = async (): Promise<PlasticType[]> => {
  try {

    const token = await AsyncStorage.getItem('token');
    
    if (!token) {
      throw new Error('No se encontró token de autenticación');
    }

    const response = await fetch(`${API_URL}/plastic`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al obtener los tipos de plástico');
    }

    const data = await response.json();
    
    if (data.success && data.responseObject) {
      return data.responseObject.map((plastic: any) => ({
        id: plastic.id,
        name: plastic.name,
        pricePerKg: plastic.price_per_kg,
      }));
    }
    
    throw new Error(data.message || 'Error al obtener los tipos de plástico');
  } catch (error) {
    console.error('Error en getPlastics:', error);
    throw error;
  }
};