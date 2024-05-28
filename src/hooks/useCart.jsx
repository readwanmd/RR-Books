import { useContext } from 'react';
import cartContext from '../contexts/cartContext';

const useCart = () => {
	return useContext(cartContext);
};
export default useCart;
