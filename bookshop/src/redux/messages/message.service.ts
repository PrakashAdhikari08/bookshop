import httpClient from "src/utils/httpClient";

const sendMessage = (message: any) =>
  httpClient.POST("/message/send", message, true);

const fetchMessage = (userId: number) =>
  httpClient.GET(`/message/${userId}`, true, {});

export default { sendMessage, fetchMessage };
