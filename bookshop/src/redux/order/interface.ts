export interface AddResponseGenerator {
  data?: string;
}

export interface ResponseGeneratorOrder {
  data: {
    book?: {
      authorName?: string;
      bookName?: string;
      description?: string;
      id?: number;
      isDeleted?: boolean;
      prich?: number;
    };
    customerName: string;
    orderDate: string;
    orderId: number;
    status: string;
    userId: 0;
  };
}
