import { message } from "antd";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
const api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 4000,
});

api.interceptors.response.use(
	(res: AxiosResponse) => {
		return Promise.resolve(res);
	},
	(err: AxiosError<IAPIResponseError>) => {
		if (!err.response) return message.error("Network Error");

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

export default api;
