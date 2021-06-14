import React from 'react';
import { NotFound } from './NotFound';
import { UserRow } from './UserRow';
import $ from 'jquery';

export const UserTable = ({ needRender, searchStringUsers, usersTable }) => {
  return (
    <table className="table" id="tableUsers">
      <thead></thead>
      <tbody id="bodyTableUsers">
        {searchStringUsers.length < 1 ? (
          <NotFound />
        ) : (
          usersTable.map((user, i) => (
            <UserRow
              renderRow={needRender}
              searchStringUsersRow={searchStringUsers}
              usersItem={user}
              key={i}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
