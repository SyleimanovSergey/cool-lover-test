import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import action from 'redux/action/index';

const { ProfileActionsType, SortActionType } = action;

export const useProfileAction = () => {
	const dispatch: Dispatch = useDispatch();
	return bindActionCreators(ProfileActionsType, dispatch);
};

export const useSortAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(SortActionType, dispatch);
};
