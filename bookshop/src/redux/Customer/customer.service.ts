import httpClient from "@Utils/httpClient";

const fetchAllUser = () => httpClient.GET("/user/all", true, {});

const changeStatus = (customerId: number, status: boolean) =>
  httpClient.GET(`/user/change-status/${customerId}`, true, { status });

export default { fetchAllUser, changeStatus };
