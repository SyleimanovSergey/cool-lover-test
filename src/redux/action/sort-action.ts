import { ActionSort, SortActionType } from 'types/types-redux';

export const setSortAge = (age: string): ActionSort => {
	return { type: SortActionType.SORT_AGE, payload: age };
};

export const setSortGender = (gender: string): ActionSort => {
	return { type: SortActionType.SORT_GENDER, payload: gender };
};

export const setSortValue = (name: string): ActionSort => {
	return { type: SortActionType.SEARCH_VALUES, payload: name };
};
