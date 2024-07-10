export interface AuthState {
  isAuthenticated: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  userId: string;
  fullName: string;
}
