import { FETCH_USER, HIDE_LOADER, SHOW_LOADER, SHOW_ERROR } from './types';
import { ADD_FAVORITE_USER } from './types';

// export function searchUser(newSearchString) {
//   console.log(newSearchString.title);
//   return {
//     type: SEARCH_USER,
//     payload: newSearchString.title,
//   };
// }

export function addFavoriteUser(user) {
  return {
    type: ADD_FAVORITE_USER,
    payload: user,
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showError() {
  return { type: SHOW_ERROR };
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
    //const responseFilter = await json.results.filter((item) => {
    //  item.name.first.includes($('#searchInputValue').text()) ||
    // item.name.last.includes($('#searchInputValue').text())
    // });

    dispatch({ type: FETCH_USER, payload: responseFilter });
    dispatch(hideLoader());
    //  } else dispatch(showError());
  };
}
