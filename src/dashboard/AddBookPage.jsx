/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from '../hooks/useAxios';

const AddBookPage = () => {
	const [formData, setFormData] = useState({
		book_title: '',
		author: '',
		genre: '',
		price: '',
		publication_date: '',
		publisher: '',
		rating: '',
		stock_quantity: '',
		bestseller: false,
		language: '',
		cover: '',
	});
	const { api } = useAxios();
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await api.post('/books', formData);
		toast.success('Book added successfully!');
		navigate('/dashboard/books');
	};

	return (
		<div className="w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6">Add New Book</h2>
			<form onSubmit={handleSubmit}>
				{/* Input fields for book details */}

				<div className="mb-4 flex gap-3 ">
					<div className="flex-1">
						<label className="block text-gray-700">Title</label>
						<input
							type="text"
							name="book_title"
							value={formData.book_title}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-gray-700">Author</label>
						<input
							type="text"
							name="author"
							value={formData.author}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>

				<div className="mb-4 flex gap-3 ">
					<div className="flex-1">
						<label className="block text-gray-700">Genre</label>
						<input
							type="text"
							name="genre"
							value={formData.genre}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-gray-700">Price</label>
						<input
							type="number"
							name="price"
							value={formData.price}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>

				<div className="mb-4 flex gap-3 ">
					<div className="flex-1">
						<label className="block text-gray-700">Publication Date</label>
						<input
							type="date"
							name="publication_date"
							value={formData.publication_date}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-gray-700">Publisher</label>
						<input
							type="text"
							name="publisher"
							value={formData.publisher}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>

				<div className="mb-4 flex gap-3 ">
					<div className="flex-1">
						<label className="block text-gray-700">Rating</label>
						<input
							type="number"
							step="0.1"
							name="rating"
							value={formData.rating}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-gray-700">Stock Quantity</label>
						<input
							type="number"
							name="stock_quantity"
							value={formData.stock_quantity}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>

				<div className="mb-4 flex gap-3 ">
					<div className="flex-1">
						<label className="block text-gray-700">Language</label>
						<input
							type="text"
							name="language"
							value={formData.language}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-gray-700">Cover URL</label>
						<input
							type="text"
							name="cover"
							value={formData.cover}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
					</div>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700">Bestseller</label>
					<input
						type="checkbox"
						name="bestseller"
						checked={formData.bestseller}
						onChange={handleChange}
						className="mr-2"
					/>
					<span className="text-gray-700">Is Bestseller</span>
				</div>

				<button
					type="submit"
					className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-200"
				>
					Add Book
				</button>
			</form>
		</div>
	);
};

export default AddBookPage;
