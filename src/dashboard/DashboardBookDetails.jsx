import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ConfirmDialog from '../components/common/ConfirmDialog';
import useAxios from '../hooks/useAxios';

const DashboardBookDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { loading, error, request } = useAxios();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await request('get', `/books/${id}`);

				setBook(response);
				console.log(response);
			} catch (err) {
				console.error('Failed to fetch blog:', err);
			}
		};

		fetchBook();
	}, [id]);

	const deleteBook = async (id) => {
		try {
			const response = await request('delete', `/books/${id}`);

			if (response) {
				navigate('/dashboard');
			}
		} catch (err) {
			console.error('Failed to fetch blog:', error);
		}
	};

	const [showConfirm, setShowConfirm] = useState(false);
	const [itemToRemove, setItemToRemove] = useState(null);

	const handleRemoveClick = (item) => {
		setItemToRemove(item.id);
		setShowConfirm(true);
	};

	const handleConfirmRemove = () => {
		deleteBook(itemToRemove);
		setShowConfirm(false);
		setItemToRemove(null);
	};

	const handleCancelRemove = () => {
		setShowConfirm(false);
		setItemToRemove(null);
	};

	if (loading) return <p>Loading...</p>;

	return (
		<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 min-h-screen">
			<div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
				<div
					className="md:w-1/3 bg-cover bg-center h-96 md:h-auto"
					style={{ backgroundImage: `url(${book?.cover})` }}
				></div>
				<div className="md:w-2/3 p-6 flex flex-col justify-between">
					<div>
						<h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">
							{book?.book_title}
						</h2>
						<p className="text-xl sm:text-2xl text-gray-700 mb-1 sm:mb-2">
							{book?.author}
						</p>
						<p className="text-sm sm:text-md text-gray-600 mb-2 sm:mb-4">
							{book?.genre}
						</p>
						<p className="text-gray-800 mb-1 sm:mb-2">
							<span className="font-semibold">Published by:</span>{' '}
							{book?.publisher}
						</p>
						<p className="text-gray-800 mb-1 sm:mb-2">
							<span className="font-semibold">Publication Date:</span>{' '}
							{book?.publication_date}
						</p>
						<p className="text-gray-800 mb-1 sm:mb-2">
							<span className="font-semibold">Language:</span> {book?.language}
						</p>
						<div className="flex items-center mb-2 sm:mb-4">
							<img
								src="https://img.icons8.com/ios-filled/50/000000/star--v1.png"
								alt="rating"
								className="w-4 h-4 sm:w-5 sm:h-5"
							/>
							<span className="text-gray-800 ml-2">{book?.rating} / 5</span>
						</div>
						<p className="text-gray-800 mb-1 sm:mb-2">
							<span className="font-semibold">Stock Quantity:</span>{' '}
							{book?.stock_quantity}
						</p>
						<p className="text-xl sm:text-3xl font-semibold text-indigo-600 mb-2 sm:mb-4">
							$ {book?.price}
						</p>
						{book?.bestseller && (
							<span className="text-white bg-green-500 py-1 px-3 rounded-full text-sm">
								Bestseller
							</span>
						)}
					</div>
					<div className="card-actions justify-between items-center mt-5">
						<Link
							to={`/dashboard/update/${id}`}
							className="btn btn-primary flex-1"
							onClick={() => {}}
						>
							Update
						</Link>

						<button
							className="btn btn-error flex-1"
							onClick={() => handleRemoveClick(book)}
						>
							Delete
						</button>
					</div>
				</div>
			</div>

			{showConfirm && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<ConfirmDialog
						message="Are you sure you want to remove this item from the cart?"
						onConfirm={handleConfirmRemove}
						onCancel={handleCancelRemove}
					/>
				</div>
			)}
		</div>
	);
};
export default DashboardBookDetails;
