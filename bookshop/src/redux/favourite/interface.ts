export interface ResponseGenerator {
  data?: [
    {
      authorName: string;
      bookId: number;
      bookName: string;
      price: number;
      userId: number;
    }
  ];
}
