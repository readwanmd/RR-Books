import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import actions from '../actions';
import ConfirmDialog from '../components/common/ConfirmDialog';
import { auth } from '../firebase';
import useCart from '../hooks/useCart';

const CartPage = () => {
	const location = useLocation();
	console.log(location);
	// const userFrom = location.state?.from || "/";
	const [user, loading, error] = useAuthState(auth);
	const { state, dispatch } = useCart();
	const { items } = state;

	const increaseQuantity = (id) => {
		dispatch({ type: actions.cart.INCREASE_QUANTITY, data: { id } });
	};

	const decreaseQuantity = (id) => {
		dispatch({ type: actions.cart.DECREASE_QUANTITY, data: { id } });
	};

	const total = items.reduce(
		(sum, item) => sum + Number(item.price) * Number(item.quantity),
		0
	);

	const [showConfirm, setShowConfirm] = useState(false);
	const [itemToRemove, setItemToRemove] = useState(null);

	const handleRemoveClick = (item) => {
		setItemToRemove(item);
		setShowConfirm(true);
	};

	const handleConfirmRemove = () => {
		dispatch({ type: actions.cart.REMOVE_FROM_CART, data: itemToRemove });
		setShowConfirm(false);
		setItemToRemove(null);
	};

	const handleCancelRemove = () => {
		setShowConfirm(false);
		setItemToRemove(null);
	};

	return (
		<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 min-h-screen">
			<h1 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
				Your Cart
			</h1>
			<div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
				{items.length === 0 ? (
					<p className="text-center text-gray-700 p-6">Your cart is empty</p>
				) : (
					<div className="flex flex-col">
						{items.map((item) => (
							<div
								key={item.id}
								className="flex items-center p-4 border-b border-gray-200"
							>
								<img
									src={item.cover}
									alt={item.book_title}
									className="w-24 h-32 object-cover rounded-md"
								/>
								<div className="flex flex-col flex-grow ml-4">
									<h2 className="text-lg sm:text-2xl font-bold text-gray-900">
										{item.book_title}
									</h2>
									<p className="text-gray-700">{item.author}</p>
									<p className="text-gray-700">${item.price}</p>
								</div>

								<div className="flex flex-col justify-between items-center">
									<div className="flex items-center py-2">
										<button
											className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-300 transition duration-200"
											onClick={() => decreaseQuantity(item.id)}
										>
											-
										</button>
										<span className="px-4 py-1 border-t border-b border-gray-200">
											{item.quantity}
										</span>
										<button
											className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-lg hover:bg-gray-300 transition duration-200"
											onClick={() => increaseQuantity(item.id)}
										>
											+
										</button>
									</div>
									<button
										className="btn btn-error"
										onClick={() => handleRemoveClick(item)}
									>
										Remove
									</button>
								</div>
							</div>
						))}
						<div className="p-4 flex justify-between items-center bg-gray-200">
							<p className="text-lg sm:text-2xl font-bold text-gray-900">
								Total: ${total.toFixed(2)}
							</p>
							{user ? (
								<Link
									to={'/checkout'}
									className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
								>
									Proceed to Checkout
								</Link>
							) : (
								<Link
									to={'/login'}
									className="bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
								>
									Login to proceed checkout
								</Link>
							)}
						</div>
					</div>
				)}
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

export default CartPage;
