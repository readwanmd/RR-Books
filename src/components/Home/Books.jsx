import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import BookCard from '../common/BookCard';

const Books = () => {
	const { loading, error, request } = useAxios();
	const [books, setBooks] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await request('get', '/books');

				setBooks(response);
			} catch (err) {
				console.error('Failed to fetch blog:', error);
			}
		};

		fetchBooks();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="container mx-auto my-8">
			<div className="flex justify-between items-center my-8">
				<h2 className="text-4xl">Books</h2>
				<Link to={'/all-books'} className="btn btn-primary">
					Show All
				</Link>
			</div>

			<div className="flex flex-wrap justify-around">
				{books && books?.map((book) => <BookCard key={book.id} book={book} />)}
			</div>
		</div>
	);
};
export default Books;
