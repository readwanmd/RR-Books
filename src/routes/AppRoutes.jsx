import { Route, Routes } from 'react-router-dom';

import Books from '../components/Home/Books';
import AddBookPage from '../dashboard/AddBookPage';
import DashboardBookDetails from '../dashboard/DashboardBookDetails';
import Dashboard_HomePage from '../dashboard/Dashboard_HomePage ';
import UpdateBook from '../dashboard/UpdateBook';
import DashboardLayout from '../layout/DashboardLayout';
import MainLayout from '../layout/MainLayout';
import AboutUs from '../pages/AboutUs';
import BookDetails from '../pages/BookDetails';
import CartPage from '../pages/CartPage ';
import Checkout from '../pages/Checkout';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import RegistrationPage from '../pages/RegistrationPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/all-books" element={<Books showAll={false} />} />
				<Route path="/book/:id" element={<BookDetails />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout" element={<Checkout />} />

				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegistrationPage />} />
			</Route>

			<Route path="*" element={<NotFound />} />

			<Route element={<PrivateRoute />}>
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route path="" element={<Dashboard_HomePage />} />
					<Route path="details/:id" element={<DashboardBookDetails />} />
					<Route path="add-book" element={<AddBookPage />} />
					<Route path="update/:id" element={<UpdateBook />} />
				</Route>
			</Route>
		</Routes>
	);
};
export default AppRoutes;
