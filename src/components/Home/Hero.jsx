import Countdown from './Countdown';

const Hero = () => {
	return (
		<div className="hero h-screen">
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-7xl font-bold">Hello Everyone!</h1>
					<p className="mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi
						quos iusto inventore natus fugiat.
					</p>

					<div className="flex justify-center my-10">
						<Countdown />
					</div>

					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
