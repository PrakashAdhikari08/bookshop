import httpClient from "@Utils/httpClient";

const fetchAdminlog = () => httpClient.GET("/logs/admin", true, {});
const fetchUserlog = () => httpClient.GET("/logs/customer", true, {});

export default { fetchAdminlog, fetchUserlog };
