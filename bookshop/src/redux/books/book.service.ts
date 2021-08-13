import httpClient from "src/utils/httpClient";

type booksData = {
  authorName: string;
  bookName: string;
  description: string;
  price: string;
};

const addBook = (data: booksData) => httpClient.POST("/book/add", data, true);

const fetchBook = () => httpClient.GET("/book/all", false, {});

const deleteBook = (id: string) =>
  httpClient.REMOVE(`/book/delete/${id}`, true);

export default { addBook, fetchBook, deleteBook };
