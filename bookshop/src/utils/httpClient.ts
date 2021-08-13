import axios from "axios";

const BaseURL = `${import.meta.env.VITE_APP_BASE_URL}`;

const http = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  responseType: "json",
});

const getHeaders = (secure: boolean) => {
  let headerOptions = {
    Authorization: "",
  };
  if (secure) {
    headerOptions["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  return headerOptions;
};

function GET(url: string, secure = false, params: {}) {
  return http.get(url, {
    headers: getHeaders(secure),
    params: params,
  });
}

function POST(url: string, data: {}, secure = true) {
  return http.post(url, data, {
    headers: getHeaders(secure),
    params: {},
  });
}

function PUT(url: string, data: {}, secure = true) {
  return http.put(url, data, { headers: getHeaders(secure), params: {} });
}
function REMOVE(url: string, secure = true) {
  return http.delete(url, { headers: getHeaders(secure) });
}

export default {
  GET,
  POST,
  PUT,
  REMOVE,
};
