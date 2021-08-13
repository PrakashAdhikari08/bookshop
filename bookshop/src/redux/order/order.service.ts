import httpClient from "src/utils/httpClient";

const addOrder = (order: any) => httpClient.GET("/order/book", true, order);
const fetchBookByAdmin = () => httpClient.GET("/order/book/all", true, {});
const cancleOrder = (id: number) =>
  httpClient.GET(`/order/cancel-order/${id}`, true, {});

const confirmOrder = (id: number) =>
  httpClient.GET(`/order/confirm-order/${id}`, true, {});

const userOrder = (id: number) =>
  httpClient.GET(`/order/my-order/${id}`, true, {});

export default {
  addOrder,
  fetchBookByAdmin,
  cancleOrder,
  confirmOrder,
  userOrder,
};
