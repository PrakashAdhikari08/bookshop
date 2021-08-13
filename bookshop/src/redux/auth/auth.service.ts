import httpClient from "src/utils/httpClient";

type logindata = {
  email: string;
  password: string;
};

const authLogin = (data: logindata) =>
  httpClient.POST("/user/login", data, false);

const userRegister = (data: any) =>
  httpClient.POST("/user/register", data, false);

const updateProfile = (data: any, id: any) =>
  httpClient.PUT(`/user/profile/edit/${id}`, data, true);

export default { authLogin, userRegister, updateProfile };
