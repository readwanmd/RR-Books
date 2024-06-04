import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

const Users = () => {
	const [data, setData] = useState({
		users: [],
	});
	const { api } = useAxios();

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await api.get('/users');
			setData((prev) => {
				return { ...prev, users: response.data };
			});
		};

		fetchUsers();
	}, [api]);

	const deleteUser = async (id) => {
		const response = await api.delete(`/delete-user/${id}`);
		if (response.status === 200) {
			setData((prev) => ({
				...prev,
				users: prev.users.filter((user) => user._id !== id),
			}));
		}
	};

	return (
		<div className="text-gray-900 bg-gray-200">
			<div className="p-4 flex">
				<h1 className="text-3xl">All Users</h1>
			</div>
			<div className="px-3 py-4 flex justify-center">
				<table className="w-full text-md bg-white shadow-md rounded mb-4">
					<tbody>
						<tr className="border-b">
							<th className="text-left p-3 px-5">Name</th>
							<th className="text-left p-3 px-5">Email</th>
							<th className="text-left p-3 px-5">Role</th>
							<th className="text-left p-3 px-5">Action</th>
							<th />
						</tr>

						{data?.users &&
							data.users.map((user) => (
								<tr
									key={user._id}
									className="border-b hover:bg-orange-100 bg-gray-100"
								>
									<td className="p-3 px-5">
										<p>{user?.username}</p>
									</td>
									<td className="p-3 px-5">{user?.email}</td>
									<td className="p-3 px-5">{user?.role}</td>
									<td className="p-3 px-5 flex justify-start">
										{user?.role === 'admin' ? (
											''
										) : (
											<button
												type="button"
												className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
												onClick={() => deleteUser(user._id)}
											>
												Delete
											</button>
										)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Users;
