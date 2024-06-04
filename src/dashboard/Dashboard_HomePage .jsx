import { useEffect, useState } from 'react';
import getBookCountAndUserRoles from '../utils/getBookCountAndUserRoles';

import useAxios from '../hooks/useAxios';

const Dashboard_HomePage = () => {
	const [data, setData] = useState({
		books: [],
		users: [],
	});
	const { api } = useAxios();

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await api.get('/books');
			setData((prev) => {
				return { ...prev, books: response.data };
			});
		};

		const fetchUsers = async () => {
			const response = await api.get('/users');
			setData((prev) => {
				return { ...prev, users: response.data };
			});
		};

		fetchBooks();
		fetchUsers();
	}, [api]);

	const counts =
		data.books && data.users ? getBookCountAndUserRoles(data) : null;

	return (
		<>
			{counts && (
				<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
					<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
						<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="w-8 h-8 text-inherit"
							>
								<path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
								<path
									d="m19 3h-12a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1v-16a1 1 0 0 0 -1-1zm-12 16a1 1 0 0 1 0-2h11v2z"
									fill="#ffffff"
								/>
							</svg>
						</div>
						<div className="p-4 text-right">
							<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
								Total Books
							</p>
							<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
								{counts.bookCount}
							</h4>
						</div>
					</div>

					<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
						<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								className="w-8 h-8 text-white"
							>
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="p-4 text-right">
							<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
								User
							</p>
							<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
								{counts.userRolesCount.user}
							</h4>
						</div>
					</div>

					<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
						<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								className="w-8 h-8 text-white"
							>
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="p-4 text-right">
							<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
								Admin
							</p>
							<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
								{counts.userRolesCount.admin}
							</h4>
						</div>
					</div>

					<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
						<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								className="w-8 h-8 text-white"
							>
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="p-4 text-right">
							<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
								Staff
							</p>
							<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
								{counts.userRolesCount.staff}
							</h4>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Dashboard_HomePage;
