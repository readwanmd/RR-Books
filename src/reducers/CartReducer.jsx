import actions from '../actions';

const initialState = {
	items: [],
	price: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case actions.cart.ADD_TO_CART: {
			return {
				...state,
				items: [...state.items, { ...action.data, quantity: 1 }],
			};
		}

		case actions.cart.REMOVE_FROM_CART:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.data.id),
			};

		case actions.cart.INCREASE_QUANTITY:
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.data.id && item.stock_quantity > item.quantity
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};

		case actions.cart.DECREASE_QUANTITY:
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.data.id && item.quantity > 1
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};

		default:
			return state;
	}
};

export { cartReducer, initialState };
