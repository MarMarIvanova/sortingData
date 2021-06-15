import React, { useContext } from 'react';
import { NotFound } from './NotFound';
import { UserRow } from './UserRow';
import { Context } from '../context';
import $ from 'jquery';

export const UserTable = () => {
  const { users, searchStringUsers } = useContext(Context);

  //колбэк с UserRow
  // const isFound = (val) => {
  //   if (val) {

  //   }
  // };

  return (
    <table className="table" id="tableUsers">
      <thead></thead>
      <tbody id="bodyTableUsers">
        {searchStringUsers.length < 1 ? (
          <NotFound />
        ) : (
          users.map(
            (user, i) => {
              return (
                <UserRow
                  //isFound={isFound}
                  // renderRow={needRender}
                  // searchStringUsersRow={searchStringUsers}
                  usersItem={user}
                  key={i}
                />
              );
            }

            // <UserRow
            //   isFound={isFound}
            //   // renderRow={needRender}
            //   // searchStringUsersRow={searchStringUsers}
            //   usersItem={user}
            //   key={i}
            // />
          )
        )}
      </tbody>
    </table>
  );
};
