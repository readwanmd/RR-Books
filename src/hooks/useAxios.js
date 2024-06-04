/* eslint-disable no-useless-catch */
import axios from 'axios';
import { useEffect } from 'react';
import { api } from '../api';
import useAuth from './useAuth';

const useAxios = () => {
	const { auth, setAuth } = useAuth();

	useEffect(() => {
		// add a request interceptor
		const requestIntercept = api.interceptors.request.use(
			(config) => {
				const accessToken = auth?.accessToken;
				// console.log(accessToken);

				if (accessToken) {
					config.headers.Authorization = `Bearer ${accessToken}`;
				}

				return config;
			},
			(error) => Promise.reject(error)
		);

		// add a response interceptor
		const responseIntercept = api.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;
				if (
					error.response &&
					error.response.status === 401 &&
					!originalRequest._retry
				) {
					originalRequest._retry = true;

					try {
						const refreshToken = auth?.refreshToken;
						const response = await axios.post(
							`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
							{ refreshToken }
						);

						const { accessToken } = response.data;
						setAuth({ ...auth, accessToken });

						originalRequest.headers.Authorization = `Bearer ${accessToken}`;

						return api(originalRequest);
					} catch (error) {
						throw error;
					}
				}

				return Promise.reject(error);
			}
		);

		return () => {
			api.interceptors.request.eject(requestIntercept);
			api.interceptors.response.eject(responseIntercept);
		};
	}, [auth]);

	return { api };
};
export default useAxios;
