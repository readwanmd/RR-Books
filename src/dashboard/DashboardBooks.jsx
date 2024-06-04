import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import BookCard from './BookCard';

const DashboardBooks = () => {
	const [books, setBooks] = useState([]);
	const { api } = useAxios();
	useEffect(() => {
		const fetchBooks = async () => {
			const response = await api.get('/books');
			setBooks(response.data);
		};

		fetchBooks();
	}, [api]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{books && books.map((book) => <BookCard key={book._id} book={book} />)}
		</div>
	);
};
export default DashboardBooks;
