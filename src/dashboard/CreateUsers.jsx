import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

const CreateUsers = () => {
	const { api } = useAxios();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		role: 'user',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form Data Submitted:', formData);
		const response = await api.post('/create-user', { ...formData });

		if (response.status === 201) {
			console.log(response.data);
			navigate('/dashboard/users');
		}
	};

	const handleReset = () => {
		setFormData({
			username: '',
			email: '',
			password: '',
			role: 'user',
		});
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<form
				className="bg-white p-6 rounded shadow-md w-full max-w-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold mb-4">Create User</h2>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="username">
						Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="role">
						Role
					</label>
					<select
						id="role"
						name="role"
						value={formData.role}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded"
						required
					>
						<option value="admin">Admin</option>
						<option value="staff">Staff</option>
						<option value="user">User</option>
					</select>
				</div>

				<div className="flex items-center justify-between">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="btn btn-error "
					>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateUsers;
