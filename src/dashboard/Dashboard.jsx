import { useState } from 'react';

const Dashboard = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="min-h-screen bg-gray-200">
			<aside
				className={`bg-gradient-to-br from-gray-800 to-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 ${
					isSidebarOpen ? '' : '-translate-x-[120%]'
				}`}
			>
				<div className="relative border-b border-white/20">
					<a className="flex items-center gap-4 py-6 px-8" href="#/">
						<h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
							RR Books Dashboard
						</h6>
					</a>
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
							<a aria-current="page" className="active" href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
									type="button"
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
								</button>
							</a>
						</li>
						<li>
							<a className href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
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
										profile
									</p>
								</button>
							</a>
						</li>
						<li>
							<a className href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
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
											d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
											clipRule="evenodd"
										/>
									</svg>
									<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
										tables
									</p>
								</button>
							</a>
						</li>
						<li>
							<a className href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
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
											d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
											clipRule="evenodd"
										/>
									</svg>
									<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
										notifactions
									</p>
								</button>
							</a>
						</li>
					</ul>
					<ul className="mb-4 flex flex-col gap-1">
						<li className="mx-3.5 mt-4 mb-2">
							<p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
								auth pages
							</p>
						</li>
						<li>
							<a className href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
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
										sign in
									</p>
								</button>
							</a>
						</li>
						<li>
							<a className href="#">
								<button
									className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
										className="w-5 h-5 text-inherit"
									>
										<path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
									</svg>
									<p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
										sign up
									</p>
								</button>
							</a>
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
				<div className="mt-12">
					<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
						{/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
							<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-6 h-6 text-white"
								>
									<path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
									<path
										fillRule="evenodd"
										d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
										clipRule="evenodd"
									/>
									<path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
								</svg>
							</div>
							<div className="p-4 text-right">
								<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
									Today's Money
								</p>
								<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
									$53k
								</h4>
							</div>
							<div className="border-t border-blue-gray-50 p-4">
								<p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
									<strong className="text-green-500">+55%</strong>&nbsp;than
									last week
								</p>
							</div>
						</div>
						<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
							<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-6 h-6 text-white"
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
									Today's Users
								</p>
								<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
									2,300
								</h4>
							</div>
							<div className="border-t border-blue-gray-50 p-4">
								<p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
									<strong className="text-green-500">+3%</strong>&nbsp;than last
									month
								</p>
							</div>
						</div>
						<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
							<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-6 h-6 text-white"
								>
									<path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
								</svg>
							</div>
							<div className="p-4 text-right">
								<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
									New Clients
								</p>
								<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
									3,462
								</h4>
							</div>
							<div className="border-t border-blue-gray-50 p-4">
								<p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
									<strong className="text-red-500">-2%</strong>&nbsp;than
									yesterday
								</p>
							</div>
						</div>
						<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
							<div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									className="w-6 h-6 text-white"
								>
									<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
								</svg>
							</div>
							<div className="p-4 text-right">
								<p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
									Sales
								</p>
								<h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
									$103,430
								</h4>
							</div>
							<div className="border-t border-blue-gray-50 p-4">
								<p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
									<strong className="text-green-500">+5%</strong>&nbsp;than
									yesterday
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
