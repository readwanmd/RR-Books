import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../firebase';
import useAxios from '../hooks/useAxios';

const RegistrationPage = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { request } = useAxios();
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);

		try {
			const response = await registerWithEmailAndPassword(
				formData.email,
				formData.password
			);

			console.log(response);
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="flex justify-center">
			<div className="mx-auto max-w-lg px-6 lg:px-8 py-20">
				<p className="text-4xl font-bold text-center my-5">RR Books</p>

				<div className="rounded-2xl bg-white shadow-xl">
					<form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
						<div className="mb-11">
							<h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
								Welcome
							</h1>
						</div>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
							placeholder="Full name"
							required
						/>

						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
							placeholder="Email"
							required
						/>

						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
							placeholder="Password"
							required
						/>

						<Link href="/login" className="flex justify-end mb-6">
							<span className="text-indigo-600 text-right text-base font-normal leading-6">
								Forgot Password?
							</span>
						</Link>

						<div className="buttons flex flex-col items-center">
							<button
								type="submit"
								className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm"
							>
								Register
							</button>
							<p className="text-center">Or</p>

							<button
								className="w-3/5 h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-green-600 transition-all duration-700 bg-green-500 shadow-sm mb-11"
								onClick={() => signInWithGoogle()}
							>
								Register with Google
							</button>
						</div>

						<Link
							to="/login"
							className="flex justify-center text-gray-900 text-base font-medium leading-6"
						>
							Already have an account?{' '}
							<span className="text-indigo-600 font-semibold pl-3">
								Sign In
							</span>
						</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
export default RegistrationPage;
