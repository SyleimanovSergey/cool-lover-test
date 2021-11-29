import { RootState } from './reducer';
import { ProfileState, SortState } from 'types/types-redux';

export const getProfiles = (state: RootState): ProfileState =>
	state.profileList;

export const getSortParameters = (state: RootState): SortState => state.sort;
