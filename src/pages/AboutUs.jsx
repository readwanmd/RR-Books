const AboutUs = () => {
	return (
		<div>
			<section className="py-14 lg:py-24 relative z-0 bg-gray-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
					<h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
						Buy your favourite books from{' '}
						<span className="text-indigo-600">RR Books</span>
					</h1>
					<p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis
						accusamus cupiditate!
					</p>
				</div>
			</section>

			<section className="py-14 lg:py-24 relative">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
						<div className="img-box">
							<img
								src="https://dummyimage.com/590x480.png/0fbcf9/ffffff"
								alt="About Us tailwind page"
								className="max-lg:mx-auto"
							/>
						</div>
						<div className="lg:pl-[100px] flex items-center">
							<div className="data w-full">
								<h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center relative">
									About Us{' '}
								</h2>
								<p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deserunt consequuntur, fugiat incidunt nostrum consequatur
									veritatis amet. Ducimus blanditiis dolorum saepe. Repellat
									dolorem quas sunt, id aperiam consequuntur necessitatibus
									alias minus harum porro odio, eos voluptatum. Nulla
									consectetur iusto quia autem.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 lg:py-24 relative">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
						<div className="lg:pr-24 flex items-center">
							<div className="data w-full">
								<img
									src="https://dummyimage.com/590x480.png/05c46b/ffffff"
									alt="About Us tailwind page"
									className="block lg:hidden mb-9 mx-auto"
								/>
								<h2 className="font-manrope font-bold text-4xl lg:text-5xl text-wh mb-9 max-lg:text-center">
									We are Creative Since 2020
								</h2>
								<p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti tenetur dicta quia, ea illum repudiandae commodi
									quidem animi accusamus beatae natus veniam dolorem, quisquam
									odio accusantium recusandae. Numquam veniam asperiores
									officiis laudantium harum. Dolore sint vero fugit fuga id
									dolorem.
								</p>
							</div>
						</div>
						<div className="img-box ">
							<img
								src="https://dummyimage.com/590x480.png/05c46b/ffffff"
								alt="About Us tailwind page"
								className="hidden lg:block "
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
						Our results in numbers
					</h2>
					<div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
						<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
							<div className="flex gap-5">
								<div className="font-manrope text-2xl font-bold text-indigo-600">
									240%
								</div>
								<div className="flex-1">
									<h4 className="text-xl text-gray-900 font-semibold mb-2">
										Company growth
									</h4>
									<p className="text-xs text-gray-500 leading-5">
										Company's remarkable growth journey as we continually
										innovate and drive towards new heights of success.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
							<div className="flex gap-5">
								<div className="font-manrope text-2xl font-bold text-indigo-600">
									15+
								</div>
								<div className="flex-1">
									<h4 className="text-xl text-gray-900 font-semibold mb-2">
										Company growth
									</h4>
									<p className="text-xs text-gray-500 leading-5">
										Our very talented team members are the powerhouse of
										pagedone and pillars of our success.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
							<div className="flex gap-5">
								<div className="font-manrope text-2xl font-bold text-indigo-600">
									9625+
								</div>
								<div className="flex-1">
									<h4 className="text-xl text-gray-900 font-semibold mb-2">
										Books Sale Completed
									</h4>
									<p className="text-xs text-gray-500 leading-5">
										We have accomplished more than 9625 Books Sale worldwide and
										we are still counting many more.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default AboutUs;
