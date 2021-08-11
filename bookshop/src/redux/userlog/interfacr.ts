export interface ResponseGenerator {
  data?: [
    {
      loginDate?: string;
      loginTime?: {
        hour?: number;
        minute?: number;
        second?: number;
        nano?: number;
      };
      name: string;
      username: string;
    }
  ];
}
