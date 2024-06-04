import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	// const [user, loading, error] = useAuthState(auth);

	return <>{true ? <Outlet /> : <Navigate to={'/login'} />}</>;
};
export default PrivateRoute;
