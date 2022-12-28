import { message } from "antd";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
const API: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 4000,
});

API.interceptors.request.use((config: AxiosRequestConfig) => {
	const accessToken = localStorage.getItem("access_token");

	if (!accessToken || !config.headers) return config;

	config.headers["Authorization"] = `Bearer ${accessToken}`;

	return config;
});

API.interceptors.response.use(
	(res: AxiosResponse) => {
		return Promise.resolve(res);
	},
	async (err: AxiosError<IAPIResponseError>) => {
		if (!err.response) return message.error("Network Error");

		interface APIResponse extends IAPIResponseSuccess {
			access_token: string;
		}

		const accessToken = localStorage.getItem("access_token");
		const refreshToken = localStorage.getItem("refresh_token");

		// auto refresh access token if it is expired
		if (
			err.response?.status === 403 &&
			err.response.data.error === "User is not logged in or access_token is expired" &&
			accessToken &&
			refreshToken
		) {
			const res = await API.get<APIResponse>("/auth/refresh", {
				headers: {
					"x-refresh": refreshToken,
				},
			});

			if (res.data.access_token) {
				localStorage.setItem("access_token", res.data.access_token);
				// resend the request with new access token
				const response = await API(err.config as AxiosRequestConfig);
				return Promise.resolve(response);
			}
		}

		if (err.response.data) {
			message.error({
				content: err.response.data.error,
				duration: 2,
				key: "error",
			});
			return Promise.reject(err.response.data);
		}
	},
);

export interface IAPIResponseSuccess {
	message: string;
}

export interface IAPIResponseError {
	error: string;
}

export default API;
