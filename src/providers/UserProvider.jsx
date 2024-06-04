import { useState } from 'react';
import userContext from '../contexts/userContext';

const UserProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	return (
		<userContext.Provider value={{ auth, setAuth }}>
			{children}
		</userContext.Provider>
	);
};
export default UserProvider;
