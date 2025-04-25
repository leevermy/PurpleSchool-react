import { useContext } from 'react'
import { UserContext } from '../context/user.context';


export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('Hook must be used within a UserContextProvider')
	}
	return context; 
}