import { FETCH_USER, HIDE_LOADER, SHOW_LOADER } from './types';

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      'https://randomuser.me/api/?results=50&inc=name,email,registered,picture'
    );

    const json = await response.json();
    // if (json.results) {
    const responseFilter = await json.results;
    dispatch({ type: FETCH_USER, payload: responseFilter });
    dispatch(hideLoader());
    //  } else dispatch(showError());
  };
}
