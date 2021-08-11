export interface ResponseGenerator {
  data: [
    {
      authorName?: string;
      bookName: string;
      id: number;
      price: number;
    }
  ];
}

export interface DelectResponseGenetater {
  data?: string;
}
