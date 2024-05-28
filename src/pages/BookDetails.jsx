import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import actions from '../actions';
import useAxios from '../hooks/useAxios';
import useCart from '../hooks/useCart';

const BookDetails = () => {
	const { id } = useParams();

	const { loading, error, request } = useAxios();
	const [book, setBook] = useState(null);
	const { state, dispatch } = useCart();

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await request('get', `/books/${id}`);

				setBook(response);
				console.log(response);
			} catch (err) {
				console.error('Failed to fetch blog:', error);
			}
		};

		fetchBook();
	}, [id]);

	const addToCart = () => {
		const isBookInCart = state.items.find((item) => item.id === book.id);

		if (isBookInCart) {
			toast.info('Book is already in the cart!', {
				position: 'top-right',
				autoClose: 2500,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'dark',
				transition: Bounce,
			});
		} else {
			dispatch({ type: actions.cart.ADD_TO_CART, data: book });

			toast.success('Book added to cart!', {
				position: 'top-right',
				autoClose: 2500,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'dark',
				transition: Bounce,
			});
		}
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
					<button
						className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-4 sm:mt-6 hover:bg-indigo-700 transition duration-200"
						onClick={addToCart}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default BookDetails;
