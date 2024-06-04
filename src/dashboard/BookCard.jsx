/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { starIcon } from '../assets';
import ConfirmDialog from '../components/common/ConfirmDialog';
import useAxios from '../hooks/useAxios';

const BookCard = ({ book }) => {
	const { book_title, author, rating, price, _id, cover } = book;
	const { api } = useAxios();

	// const { dispatch } = useCart();
	const navigate = useNavigate();

	const handleUpdate = () => {
		// Logic for updating the book
		// history.push(`/update-book/${book._id}`);
	};

	const deleteBook = async (_id) => {
		try {
			console.log('here');
			const response = await api.delete(`/books/${_id}`);

			if (response) {
				navigate('/');
			}
		} catch (err) {
			console.error('Failed to delete:', err);
		}
	};

	const [showConfirm, setShowConfirm] = useState(false);
	const [itemToRemove, setItemToRemove] = useState(null);

	const handleRemoveClick = (item) => {
		setItemToRemove(item);
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
					<Link to={`/dashboard/details/${_id}`} className="btn btn-primary">
						See Details
					</Link>
				</div>
				<div className="card-actions justify-between items-center">
					<Link
						to={`/dashboard/update/${_id}`}
						className="btn btn-primary flex-1"
						onClick={() => {}}
					>
						Update
					</Link>

					<button
						className="btn btn-error flex-1"
						onClick={() => handleRemoveClick(_id)}
					>
						Delete
					</button>
				</div>
			</div>

			{showConfirm && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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

export default BookCard;
