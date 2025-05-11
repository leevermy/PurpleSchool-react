import {FC} from 'react'
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../hooks';
 
 const RequireAuth: FC<{children: React.ReactNode}> = ({children}) => {
	const {userName} = useUserContext();

	if (!userName) {
		console.log('no')
		return <Navigate to='/auth' replace/>
	};
	
	return children;
 }
 
 export default RequireAuth