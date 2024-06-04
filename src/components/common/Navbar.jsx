import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { shopingBagIcon } from '../../assets';
import { auth as firebaseAuth } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const Navbar = () => {
	const { state } = useCart();
	const navigate = useNavigate();
	// const [user, loading, error] = useAuthState(auth);
	const { auth, setAuth } = useAuth();

	console.log(auth);
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
							<a href="#faq">Faq</a>
						</li>

						{auth?.id && (
							<li>
								<Link to={'/profile'}>Profile</Link>
							</li>
						)}

						{auth?.email === 'test@test.com' && (
							<li>
								<Link to={'/dashboard'}>Dashboard</Link>
							</li>
						)}
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

					<li>
						<a href="#faq">Faq</a>
					</li>

					{auth?.id && (
						<li>
							<Link to={'/profile'}>Profile</Link>
						</li>
					)}

					{auth?.email === 'test@test.com' && (
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
				{!auth?.email ? (
					<Link to={'/login'} className="btn btn-primary">
						Login
					</Link>
				) : (
					<>
						<details className="dropdown dropdown-end">
							<summary className="m-1 btn">{auth?.username}</summary>
							<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
								<li>
									<button className="btn btn-primary" onClick={handleLogout}>
										Logout
									</button>
								</li>
							</ul>
						</details>
					</>
				)}
			</div>
		</div>
	);
};
export default Navbar;
