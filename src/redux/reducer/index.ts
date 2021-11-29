import { combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import sortReducer from './sort-reducer';

import { ProfileState, SortState } from 'types/types-redux';

export interface RootReducer {
	profiles: ProfileState;
	sort: SortState;
}

export const rootReducer = combineReducers({
	profileList: profileReducer,
	sort: sortReducer
});

export type RootState = ReturnType<typeof rootReducer>
