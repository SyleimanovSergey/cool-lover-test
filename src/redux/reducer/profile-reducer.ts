import {
	ActionProfile,
	ProfileActionsType,
	ProfileState
} from 'types/types-redux';

const initialState: ProfileState = {
	loader: false,
	profiles: [],
	error: null,
	sortProfile: []
};

const reducer = (state = initialState, action: ActionProfile) => {
	switch (action.type) {
		case ProfileActionsType.FETCH_PROFILES:
			return { ...state, loader: true };

		case ProfileActionsType.FETCH_PROFILES_SUCCESS:
			return {
				...state,
				loader: false,
				error: null,
				profiles: [...state.profiles, ...action.payload]
			};
		case ProfileActionsType.FETCH_PROFILES_ERROR: {
			return {
				...state,
				loader: false,
				profiles: [],
				error: action.payload
			};
		}
		case ProfileActionsType.SORT_PROFILES: {
			return {
				...state,
				sortProfile: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
