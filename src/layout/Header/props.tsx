export interface IHeader {
	label: string;
	icon?: string;
	link?: string;
	badge?: boolean;
	onClick?: () => void;
  }