import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { auth as firebaseAuth } from '../firebase';
import useAuth from '../hooks/useAuth';

const DashboardLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleLogout = async () => {
		if (auth.loginMethod === 'google') {
			signOut(firebaseAuth)
				.then(() => {
					setAuth({});
					navigate('/login');
				})
				.catch((error) => {
					console.log(error);
				});
		} else if (auth.loginMethod === 'express') {
			const response = await api.post(
				`${import.meta.env.VITE_SERVER_BASE_URL}/auth/logout`
			);

			if (response.status === 200) {
				setAuth({});
				navigate('/login');
			}
		}
	};

	return (
		<div className="min-h-screen bg-gray-200">
			<aside
				className={`bg-gradient-to-br from-gray-800 to-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 ${
					isSidebarOpen ? '' : '-translate-x-[120%]'
				}`}
			>
				<div className="relative border-b border-white/20">
					<NavLink to={'/'} className="flex items-center gap-4 py-6 px-8">
						<h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
							RR Books Dashboard
						</h6>
					</NavLink>
					<button
						className="middle none absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
						type="button"
						onClick={toggleSidebar}
					>
						<span className="absolute top-[14px] left-[20px] transform -translate-y-1/2 -translate-x-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2.5"
								stroke="currentColor"
								aria-hidden="true"
								className="h-7 w-7 p-1 rounded-full text-white bg-gray-800"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</span>
					</button>
				</div>
				<div className="m-4">
					<ul className="mb-4 flex flex-col gap-1">
						<li>
							<NavLink
								to="/dashboard"
								aria-current="page"
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-5 h-5 text-inherit"
								>
									<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
									<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									dashboard
								</p>
							</NavLink>
						</li>

						<li>
							<NavLink
								to={'/dashboard/books'}
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 text-inherit"
								>
									<path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
									<path
										d="m19 3h-12a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1v-16a1 1 0 0 0 -1-1zm-12 16a1 1 0 0 1 0-2h11v2z"
										fill="#ffffff"
									/>
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									Books
								</p>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dashboard/add-book"
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									fill="none"
									height="20"
									viewBox="0 0 20 20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 text-inherit"
								>
									<g fill="#ffffff">
										<path d="m6 2c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h4.2572c-.2537-.3071-.47459-.6422-.65749-1h-3.59971c-.55228 0-1-.4477-1-1h4.20703c-.13486-.4768-.20703-.98-.20703-1.5 0-3.0376 2.4624-5.5 5.5-5.5.52 0 1.0232.07217 1.5.20703v-5.20703c0-1.10457-.8954-2-2-2zm.75 2.5h6.5c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-6.5c-.41421 0-.75-.33579-.75-.75s.33579-.75.75-.75z" />
										<path d="m19 14.5c0 2.4853-2.0147 4.5-4.5 4.5s-4.5-2.0147-4.5-4.5 2.0147-4.5 4.5-4.5 4.5 2.0147 4.5 4.5zm-4-2c0-.2761-.2239-.5-.5-.5s-.5.2239-.5.5v1.5h-1.5c-.2761 0-.5.2239-.5.5s.2239.5.5.5h1.5v1.5c0 .2761.2239.5.5.5s.5-.2239.5-.5v-1.5h1.5c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5h-1.5z" />
									</g>
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									Add new book
								</p>
							</NavLink>
						</li>

						<li>
							<NavLink
								to={'/dashboard/users'}
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-5 h-5 text-inherit"
								>
									<path
										fillRule="evenodd"
										d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									Users
								</p>
							</NavLink>
						</li>

						<li>
							<NavLink
								to={'/dashboard/create-users'}
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									fill="none"
									height="24"
									viewBox="0 0 24 24"
									width="24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 text-inherit"
								>
									<g fill="#fff">
										<path d="m21.97 2.33c-.72-.82-1.79-1.33-2.97-1.33-1.12 0-2.14.46-2.87 1.21-.42.43-.74.95-.93 1.53-.13.4-.2.82-.2 1.26 0 .75.21 1.46.58 2.06.2.34.46.65.76.91.7.64 1.63 1.03 2.66 1.03.44 0 .86-.07 1.25-.21.92-.29 1.69-.92 2.17-1.73.21-.34.37-.73.46-1.13.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67zm-1.48 3.4h-.74v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74c.41 0 .75.34.75.75s-.33.75-.75.75z" />
										<path d="m22 12c0-1.31-.25-2.57-.72-3.72-.31.22-.66.39-1.03.51-.11.04-.22.07-.34.1.38.96.59 2.01.59 3.11 0 2.32-.94 4.43-2.46 5.97-.29-.37-.66-.71-1.1-1-2.71-1.82-7.15-1.82-9.88 0-.44.29-.8.63-1.1 1-1.52-1.54-2.46-3.65-2.46-5.97 0-4.69 3.81-8.5 8.5-8.5 1.09 0 2.14.21 3.1.59.03-.12.06-.23.1-.35.12-.37.29-.71.52-1.02-1.15-.47-2.41-.72-3.72-.72-5.51 0-10 4.49-10 10 0 2.9 1.25 5.51 3.23 7.34 0 .01 0 .01-.01.02.1.1.22.18.32.27.06.05.11.1.17.14.18.15.38.29.57.43.07.05.13.09.2.14.19.13.39.25.6.36.07.04.15.09.22.13.2.11.41.21.63.3.08.04.16.08.24.11.22.09.44.17.66.24.08.03.16.06.24.08.24.07.48.13.72.19.07.02.14.04.22.05.28.06.56.1.85.13.04 0 .08.01.12.02.34.03.68.05 1.02.05s.68-.02 1.01-.05c.04 0 .08-.01.12-.02.29-.03.57-.07.85-.13.07-.01.14-.04.22-.05.24-.06.49-.11.72-.19.08-.03.16-.06.24-.08.22-.08.45-.15.66-.24.08-.03.16-.07.24-.11.21-.09.42-.19.63-.3.08-.04.15-.09.22-.13.2-.12.4-.23.6-.36.07-.04.13-.09.2-.14.2-.14.39-.28.57-.43.06-.05.11-.1.17-.14.11-.09.22-.18.32-.27 0-.01 0-.01-.01-.02 1.99-1.83 3.24-4.44 3.24-7.34z" />
										<path d="m12 6.92969c-2.07 0-3.75 1.68-3.75 3.75001 0 2.03 1.59 3.68 3.7 3.74h.09.07.02c2.02-.07 3.61-1.71 3.62-3.74 0-2.07001-1.68-3.75001-3.75-3.75001z" />
									</g>
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									Create new user
								</p>
							</NavLink>
						</li>

						<li>
							<NavLink
								to={'/dashboard/profile'}
								className="flex items-center px-4 py-3 gap-4 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-5 h-5 text-inherit"
								>
									<path
										fillRule="evenodd"
										d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
										clipRule="evenodd"
									/>
								</svg>
								<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
									Profile
								</p>
							</NavLink>
						</li>
					</ul>
					<ul className="mb-4 flex flex-col gap-1">
						<li className="mx-3.5 mt-4 mb-2">
							<p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
								auth
							</p>
						</li>
						<li>
							<button>
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
									onClick={handleLogout}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
										className="w-5 h-5 text-inherit"
									>
										<path
											fillRule="evenodd"
											d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
											clipRule="evenodd"
										/>
									</svg>
									<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
										sign Out
									</p>
								</button>
							</button>
						</li>
					</ul>
				</div>
			</aside>

			<div className="p-4 xl:ml-80">
				<nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
					<div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
						<div className="flex items-center">
							<button
								className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
								type="button"
								onClick={toggleSidebar}
							>
								<span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
										strokeWidth={3}
										className="h-6 w-6 text-blue-gray-500"
									>
										<path
											fillRule="evenodd"
											d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</nav>

				<div className="">
					{/* outlet */}
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
