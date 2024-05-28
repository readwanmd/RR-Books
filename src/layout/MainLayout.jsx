import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer';
import Navbar from '../components/common/Navbar';
import CartProvider from '../providers/CartProvider';

const MainLayout = () => {
	return (
		<>
			<CartProvider>
				<Navbar />
				<Outlet />
			</CartProvider>
			<Footer />
		</>
	);
};
export default MainLayout;
