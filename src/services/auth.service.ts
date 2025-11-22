import { User } from '@/types';


const API_URL = 'http://localhost:3030/api/auth/login'; // ← CAMBIAR AQUÍ

export const login = async (credentials: User) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al iniciar sesión');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  return Promise.resolve();
};

export const verifySession = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/auth/verify`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};