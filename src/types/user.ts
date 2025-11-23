// Credenciales para login
export type User = {
  email: string;
  password: string;
};

// Datos del usuario autenticado
export type AuthUser = {
  id: number;
  name: string;
  type: string;
};

// Respuesta completa del login
export type LoginResponse = {
  token: string;
  refreshToken: string;
  user: AuthUser;
};