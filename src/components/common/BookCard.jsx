import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import actions from '../../actions';
import { starIcon } from '../../assets';
import useCart from '../../hooks/useCart';

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
	const { state, dispatch } = useCart();

	const addToCart = () => {
		const isBookInCart = state.items.find((item) => item.id === book.id);

		if (isBookInCart) {
			toast.info('Book is already in the cart!', {
				position: 'top-right',
				autoClose: 1500,
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
				autoClose: 1500,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'dark',
				transition: Bounce,
			});
		}
	};

	const { book_title, author, rating, price, _id, cover } = book;
	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure className="w-full h-[300px]">
				<img
					src={`${cover}&text=cover of ${book_title}`}
					alt="Book Cover"
					className="object-cover object-center w-full h-full"
				/>
			</figure>

			<div className="card-body">
				<div className="flex justify-between items-center">
					<h2 className="card-title">{book_title}</h2>
					<p className="flex gap-2 justify-end">
						<img src={starIcon} alt="rating" className="w-4" />
						{rating}
					</p>
				</div>
				<p>{author}</p>
				<div className="card-actions justify-between items-center">
					<p className="font-bold">$ {price}</p>

					<Link to={`/book/${_id}`} className="btn btn-secondary">
						See Details
					</Link>
				</div>

				<button className="btn btn-primary" onClick={addToCart}>
					Add to cart
				</button>
			</div>
		</div>
	);
};
export default BookCard;
