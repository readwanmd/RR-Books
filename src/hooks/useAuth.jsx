import { useContext } from 'react';
import userContext from '../contexts/userContext';

const useAuth = () => {
	return useContext(userContext);
};

export default useAuth;
