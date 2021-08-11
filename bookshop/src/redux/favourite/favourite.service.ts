import httpClient from "@Utils/httpClient";

const addFavourite = (userId: number, bookId: number) =>
  httpClient.GET("/favourite/add", true, { userId: userId, bookId: bookId });

const fetchFavourite = (userId: number) =>
  httpClient.GET("/favourite/books", true, { userId });

const removeFavourite = (userId: number, bookId: number) =>
  httpClient.GET("/favourite/remove", true, { userId, bookId });

export default { addFavourite, fetchFavourite, removeFavourite };
