import { IDataFromStorage } from '../interface';

export interface IUserContext {
	searchValue: string | undefined;
	setSearchValue: (value: string) => void;
	userName: string | undefined;
	setUserName: (value: string) => void;
	dataFromStorage: IDataFromStorage[];
	setDataFromStorage: (data: IDataFromStorage[]) => void;
  }

  export interface IUser {
	name: string;
	isLoggedIn: boolean;
  }