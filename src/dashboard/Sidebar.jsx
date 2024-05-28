import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="fixed h-screen w-64 bg-gray-800 text-white">
			<div className="p-4">
				<h1 className="text-xl font-bold">Bookstore Dashboard</h1>
			</div>
			<nav>
				<ul>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/dashboard">Home</Link>
					</li>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/dashboard/add-book">Add Book</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
