export interface ResponseGenerator {
  data?: [
    {
      address?: string;
      birthDate?: string;
      email?: string;
      enabled?: boolean;
      firstName?: string;
      gender?: string;
      id?: number;
      lastLoggedIn?: string;
      lastName?: string;
      lastUpdated?: string;
      password?: string;
      role?: string;
    }
  ];
}

export interface ResponseGeneratorChangeState {
  data?: {
    address?: string;
    birthDate?: string;
    email?: string;
    enabled?: boolean;
    firstName?: string;
    gender?: string;
    id?: number;
    lastLoggedIn?: string;
    lastName?: string;
    lastUpdated?: string;
    password?: string;
    role?: string;
  };
}
