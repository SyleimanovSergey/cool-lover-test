import { Dispatch } from 'redux';
import {
	ActionProfile,
	ProfileActionsType,
	ProfileReduceInterface
} from 'types/types-redux';
import axiosInstance from 'api';

export const fetchProfile = () => {
	return async (dispatch: Dispatch<ActionProfile>) => {
		try {
			dispatch({ type: ProfileActionsType.FETCH_PROFILES });
			const response = await axiosInstance.get(
				`?results=20&inc=gender,name,dob,location,registered,id,picture&noinfo`
			);
			localStorage.clear();
			localStorage.setItem('profiles', JSON.stringify(response.data.results));
			dispatch({
				type: ProfileActionsType.FETCH_PROFILES_SUCCESS,
				payload: response.data.results
			});
		} catch (e) {
			dispatch({
				type: ProfileActionsType.FETCH_PROFILES_ERROR,
				payload: 'Неверный запрос'
			});
		}
	};
};

export const setSortProfile = (
	profiles: ProfileReduceInterface[]
): ActionProfile => {
	return { type: ProfileActionsType.SORT_PROFILES, payload: profiles };
};
