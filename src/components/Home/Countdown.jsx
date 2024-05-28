import { useEffect, useState } from 'react';

const Countdown = () => {
	const calculateTimeLeft = () => {
		const difference = +new Date('2024-06-30') - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-5xl">
					<span style={{ '--value': timeLeft.days }}></span>
				</span>
				days
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-5xl">
					<span style={{ '--value': timeLeft.hours }}></span>
				</span>
				hours
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-5xl">
					<span style={{ '--value': timeLeft.minutes }}></span>
				</span>
				min
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="countdown font-mono text-5xl">
					<span style={{ '--value': timeLeft.seconds }}></span>
				</span>
				sec
			</div>
		</div>
	);
};

export default Countdown;
