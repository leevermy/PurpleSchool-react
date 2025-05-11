import { FC, createContext, useEffect, useState } from 'react';
import { usersStorage } from '../temporaryData';
import { IDataFromStorage } from '../interface';
import { IUser, IUserContext } from './interface';

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserContextProvider:FC<{children: React.ReactNode}> = ({ children }) => {
	const [ searchValue, setSearchValue ] = useState<string | undefined>();
  	const [ userName, setUserName ] = useState<string | undefined>(() => {
		const stored = localStorage.getItem('users');
		if (stored) {
			const users = JSON.parse(stored) as IUser[];
			const loggedInUser = users.find(user => user.isLoggedIn);
			return loggedInUser?.name;
		}
		return undefined;
	});
  	const [ dataFromStorage, setDataFromStorage ] = useState<IDataFromStorage[]>(() => {
		const stored = localStorage.getItem('users');
		return stored ? JSON.parse(stored) : usersStorage;
	});

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(dataFromStorage))
	}, [dataFromStorage])
	

	return (
		<UserContext.Provider value={{ searchValue, setSearchValue, userName, setUserName,  dataFromStorage, setDataFromStorage }} >
			{ children }
		</UserContext.Provider>
	)
}