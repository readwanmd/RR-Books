import axios from 'axios';
import { useCallback, useState } from 'react';

const useAxios = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const api = axios.create({
		baseURL: import.meta.env.VITE_SERVER_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const request = useCallback(
		async (method, url, data = null) => {
			setLoading(true);
			setError(null);
			try {
				const response = await api({
					method,
					url,
					data,
				});
				if (response.status === 200) {
					return response.data;
				}
			} catch (err) {
				setError(err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[api]
	);

	return { loading, error, request };
};

export default useAxios;
