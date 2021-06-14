import { ADD_FAVORITE_USER, FETCH_USER } from './types';

const initialState = {
  users: [],
  favoriteUsers: [],
  isFetching: false,
  fetchedUsers: [],
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_USER:
      //  return { ...state, users: [...state.posts, [action.payload]] }; //создаем массив, основываясь на старом
      return { ...state, favoriteUsers: state.favoriteUsers.concat([action.payload]) };
    case FETCH_USER:
      return { ...state, fetchedUsers: action.payload };
    default:
      return state;
  }
};
