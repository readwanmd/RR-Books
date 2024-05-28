const Hero = () => {
	return (
		// <div className="hero h-screen">
		// 	<div className="hero-overlay bg-opacity-60"></div>
		// 	<div className="hero-content text-center text-neutral-content">
		// 		<div className="max-w-md">
		// 			<h1 className="mb-5 text-7xl font-bold">Hello Everyone!</h1>
		// 			<p className="mb-5">
		// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi
		// 				quos iusto inventore natus fugiat.
		// 			</p>

		// 			<div className="flex justify-center my-10">
		// 				<Countdown />
		// 			</div>

		// 			<button className="btn btn-primary">Get Started</button>
		// 		</div>
		// 	</div>
		// </div>
		<div
			className="hero-section bg-cover bg-center h-screen"
			style={{ backgroundImage: 'url("path/to/your/background-image.jpg")' }}
		>
			<div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
				<h1 className="text-5xl font-bold mb-4">Welcome to RR Books</h1>
				<p className="text-2xl mb-6">
					Your One-Stop Shop for All Your Reading Needs
				</p>
				<p className="mb-8">
					Explore our vast collection of books from various genres and find your
					next great read today!
				</p>
				<a
					href="#books"
					className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
				>
					Browse Books
				</a>
			</div>
		</div>
	);
};
export default Hero;
