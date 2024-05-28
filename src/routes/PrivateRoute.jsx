import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = () => {
	const [user, loading, error] = useAuthState(auth);

	return <>{user ? <Outlet /> : <Navigate to={'/login'} />}</>;
};
export default PrivateRoute;
