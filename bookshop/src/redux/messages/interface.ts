export interface ResponseGenerator {
  data?: [
    {
      dateTime: string;
      id: number;
      message: string;
      sender: string;
      userId: number;
    }
  ];
}

export interface ResponseMessage {
  data: {
    dateTime: string;
    id: number;
    message: string;
    sender: string;
    userId: number;
  };
}
