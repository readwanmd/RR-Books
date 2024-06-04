import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const ProfilePage = () => {
	const { api } = useAxios();
	const [user, setUser] = useState(null);
	const { auth } = useAuth();

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await api.get(`/profile/${auth.id}`);

				setUser(response.data);
			} catch (err) {
				console.error('Failed to Profile', err);
			}
		};

		fetchProfile();
	}, [auth.id]);

	return (
		<>
			{user && (
				<div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
					<p className="w-32 h-32 rounded-full bg-slate-500 grid place-content-center text-6xl mx-auto">
						{user.username.charAt(0).toUpperCase()}
					</p>
					<h2 className="text-center text-2xl font-semibold mt-3">
						{user.username}
					</h2>
					<p className="text-center text-gray-600 mt-1">{user.email}</p>
				</div>
			)}
		</>
	);
};

export default ProfilePage;
