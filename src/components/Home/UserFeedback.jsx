const feedbackData = [
	{ username: 'Alice', feedback: 'Great service!' },
	{ username: 'Bob', feedback: 'Loved the selection of books.' },
	{ username: 'Charlie', feedback: 'Fast delivery!' },
	{ username: 'David', feedback: 'Amazing customer support.' },
	{ username: 'Eve', feedback: 'User-friendly website.' },
];

const UserFeedback = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 space-y-6 overflow-hidden">
			<h1 className="text-4xl">User Feedback</h1>
			<div className="feedback-row feedback-row-rtl">
				{feedbackData.map((feedback, index) => (
					<div key={index} className="feedback-card">
						<h3 className="text-lg font-semibold">{feedback.username}</h3>
						<p className="text-gray-600">{feedback.feedback}</p>
					</div>
				))}
			</div>
			<div className="feedback-row feedback-row-ltr">
				{feedbackData.map((feedback, index) => (
					<div key={index} className="feedback-card">
						<h3 className="text-lg font-semibold">{feedback.username}</h3>
						<p className="text-gray-600">{feedback.feedback}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserFeedback;
