import axios from 'axios';
import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth as firebaseAuth } from '../firebase';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
	const [signInWithGoogle, user, loading, error] =
		useSignInWithGoogle(firebaseAuth);

	const { auth, setAuth } = useAuth();
	// const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

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
			//google login with email and password
			// const response = await loginWithEmailAndPassword(
			// 	formData.email,
			// 	formData.password
			// );

			//express login with email and password
			const response = await axios.post(
				`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
				{
					email: formData.email,
					password: formData.password,
				}
			);

			console.log({ response });
			setAuth({ ...response.data, loginMethod: 'express' });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const googleSignin = async () => {
		const response = await signInWithGoogle();
		console.log({ response });
		setAuth({
			username: response?.user?.displayName,
			email: response?.user?.email,
			accessToken: response?.user?.accessToken,
			loginMethod: 'google',
		});
		navigate('/');
	};

	return (
		<section className="flex justify-center">
			<div className="mx-auto max-w-lg px-6 lg:px-8 py-8">
				<p className="text-4xl font-bold text-center my-5">RR Books</p>

				<div className="rounded-2xl bg-white shadow-xl">
					<form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
						<div className="mb-11">
							<h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
								Welcome Back
							</h1>
						</div>
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
							placeholder="Username"
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
						<a href="javascript:;" className="flex justify-end mb-6">
							<span className="text-indigo-600 text-right text-base font-normal leading-6">
								Forgot Password?
							</span>
						</a>

						<div className="buttons flex flex-col items-center">
							<button
								type="submit"
								className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm"
							>
								Login
							</button>
							<p className="text-center">Or</p>

							<button
								className="w-3/5 h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-green-600 transition-all duration-700 bg-green-500 shadow-sm mb-11"
								onClick={googleSignin}
							>
								Login with Google
							</button>
						</div>

						<Link
							to="/register"
							className="flex  justify-center text-gray-900 text-base font-medium leading-6"
						>
							Don’t have an account?{' '}
							<span className="text-indigo-600 font-semibold pl-3">
								Sign Up
							</span>
						</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
export default LoginPage;
