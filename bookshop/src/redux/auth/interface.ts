export interface ResponseGenerator {
  data: {
    token?: string;

    responseUser?: {
      role?: string;
      firstName?: string;
      id?: string;
      lastName?: string;
      email?: string;
      address?: string;
      birthData?: string;
      gender?: string;
    };
  };
}

export interface ResponseGeneratorUpdate {
  data: {
    role?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    email?: string;
    address?: string;
    birthData?: string;
    gender?: string;
  };
}
