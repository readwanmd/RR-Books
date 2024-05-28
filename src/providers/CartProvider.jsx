import { useReducer } from 'react';
import cartContext from '../contexts/cartContext';
import { cartReducer, initialState } from '../reducers/CartReducer';

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<cartContext.Provider value={{ state, dispatch }}>
			{children}
		</cartContext.Provider>
	);
};
export default CartProvider;
