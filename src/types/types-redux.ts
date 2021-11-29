export interface ProfileState {
	loader: boolean;
	error: null | string;
	profiles: ProfileReduceInterface[];
	sortProfile: ProfileReduceInterface[];
}

export interface ProfileReduceInterface {
	gender: string;
	name: {
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
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
	};
}

export enum ProfileActionsType {
	FETCH_PROFILES = 'fetchProfiles',
	FETCH_PROFILES_SUCCESS = 'fetchProfilesSuccess',
	FETCH_PROFILES_ERROR = 'fetchProfilesError',
	SORT_PROFILES = 'sortProfiles'
}

interface FetchProfilesAction {
	type: ProfileActionsType.FETCH_PROFILES;
}

interface FetchProfilesSuccessAction {
	type: ProfileActionsType.FETCH_PROFILES_SUCCESS;
	payload: ProfileReduceInterface[];
}

interface FetchProfilesErrorAction {
	type: ProfileActionsType.FETCH_PROFILES_ERROR;
	payload: string;
}

interface SortProfilesAction {
	type: ProfileActionsType.SORT_PROFILES;
	payload: ProfileReduceInterface[];
}

export type ActionProfile =
	| FetchProfilesAction
	| FetchProfilesSuccessAction
	| FetchProfilesErrorAction
	| SortProfilesAction;

export interface SortState {
	gender: string;
	age: string[];
	searchValue: string;
}

export enum SortActionType {
	SORT_AGE = 'sortAge',
	SORT_GENDER = 'sortGender',
	SEARCH_VALUES = 'searchValues'
}

interface SortAgeAction {
	type: SortActionType.SORT_AGE;
	payload: string;
}

interface SortGenderAction {
	type: SortActionType.SORT_GENDER;
	payload: string;
}

interface SearchValueAction {
	type: SortActionType.SEARCH_VALUES;
	payload: string;
}

export type ActionSort = SortAgeAction | SortGenderAction | SearchValueAction;
