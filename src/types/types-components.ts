export interface ProfileItemInterface {
	gender: string;
	nameUser: {
		first: string;
		last: string;
	};
	dob: {
		age: string;
	};
	location: {
		city: string;
		country: string;
	};
	registered: {
		date: string;
	};
	picture: {
		large: string
	};
}
