export enum UserRoles {
  ADMIN = 1,
  MERCADITO = 2,
  PESAJE = 3,
}

export type User = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: number;
  name: string;
  type: UserRoles;
};

export type LoginResponseObject = {
  id: number;
  name: string;
  type: string;
  typeId: number;
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  responseObject: LoginResponseObject;
  statusCode: number;
};