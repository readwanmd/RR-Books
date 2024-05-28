import { useEffect, useState } from 'react';

import useAxios from '../hooks/useAxios';
import BookCard from './BookCard';

const Dashboard_HomePage = () => {
	const [books, setBooks] = useState([]);
	const { request } = useAxios();

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await request('get', '/books');
			setBooks(response);
		};

		fetchBooks();
	}, [request]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{books && books.map((book) => <BookCard key={book.id} book={book} />)}
		</div>
	);
};

export default Dashboard_HomePage;
