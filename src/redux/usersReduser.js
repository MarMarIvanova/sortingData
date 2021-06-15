import { FETCH_USER } from './types';

const initialState = {
  users: [],
  fetchedUsers: [],
};

export const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, fetchedUsers: action.payload };
    default:
      return state;
  }
};
