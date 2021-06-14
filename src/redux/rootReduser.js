import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { usersReduser } from './usersReduser';
//import { searchReduser } from './searchReduser';

export const rootReduces = combineReducers({
  users: usersReduser,
  app: appReducer,
});
