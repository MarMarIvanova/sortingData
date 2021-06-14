import { HIDE_LOADER, SHOW_LOADER, SHOW_ERROR } from './types';

const initialState = {
  loading: false,
  error: 'oops',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: initialState };
    default:
      return state;
  }
};