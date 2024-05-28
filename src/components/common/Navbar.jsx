import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { shopingBagIcon } from '../../assets';
import { auth } from '../../firebase';
import useCart from '../../hooks/useCart';

const Navbar = () => {
	const { state } = useCart();
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);

	console.log(user);
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				navigate('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="navbar sticky bg-base-100 z-40">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to={'/all-books'}>Books</Link>
						</li>

						<li>
							<Link to={'/about'}>About</Link>
						</li>

						<li>
							<Link to={'/contact'}>Contact</Link>
						</li>
						<li>
							<Link to={'/dashboard'}>Dashboard</Link>
						</li>
					</ul>
				</div>
				<Link to={'/'} className="btn btn-ghost text-xl">
					RR Books
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to={'/all-books'}>Books</Link>
					</li>

					<li>
						<Link to={'/about'}>About</Link>
					</li>

					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>

					{user?.email === 'admin@admin.com' && (
						<li>
							<Link to={'/dashboard'}>Dashboard</Link>
						</li>
					)}
				</ul>
			</div>

			<div className="navbar-end space-x-6">
				<Link to={'/cart'} className="relative">
					<img src={shopingBagIcon} alt="cart" className="w-6 invert " />
					<div className="absolute top-[-10px] right-[-10px] badge badge-primary badge-sm text-white">
						{state?.items.length}
					</div>
				</Link>
				{!user ? (
					<Link to={'/login'} className="btn btn-primary">
						Login
					</Link>
				) : (
					<button className="btn btn-primary" onClick={handleLogout}>
						Logout
					</button>
				)}
			</div>
		</div>
	);
};
export default Navbar;
