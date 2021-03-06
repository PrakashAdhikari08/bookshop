import httpClient from "src/utils/httpClient";

interface passProps {
  userId: number;
  password: string;
  oldPassword: string;
}

const changePassword = (passwordData: passProps) =>
  httpClient.PUT("/user/change-password", passwordData, true);

export default { changePassword };
