const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
	return (
		<div
			role="alert"
			className="max-w-[650px] alert bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
		>
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="stroke-info shrink-0 w-6 h-6 mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				<span>{message}</span>
			</div>
			<div className="flex gap-2">
				<button className="btn btn-sm btn-info" onClick={onCancel}>
					Deny
				</button>
				<button className="btn btn-sm" onClick={onConfirm}>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default ConfirmDialog;
