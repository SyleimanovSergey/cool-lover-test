import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
