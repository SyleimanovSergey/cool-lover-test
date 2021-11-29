import { ActionSort, SortActionType, SortState } from 'types/types-redux';

const initialState: SortState = {
	age: [],
	gender: '',
	searchValue: ''
};

const reducer = (state = initialState, action: ActionSort) => {
	switch (action.type) {
		case SortActionType.SORT_AGE:
			if (state.age.includes(action.payload)) {
				return {
					...state,
					age: state.age.filter((item) => item !== action.payload)
				};
			} else {
				return { ...state, age: [...state.age, action.payload] };
			}

		case SortActionType.SORT_GENDER: {
			return { ...state, gender: action.payload };
		}
		case SortActionType.SEARCH_VALUES: {
			return { ...state, searchValue: action.payload };
		}
		default:
			return state;
	}
};

export default reducer;
