import React from 'react';

export const UserRow = ({ renderRow, searchStringUsersRow, usersItem }) => {
  if (
    renderRow &&
    (usersItem.name.first.includes(searchStringUsersRow) ||
      usersItem.name.last.includes(searchStringUsersRow))
  )
    return (
      <>
        <React.Fragment>
          <tr name="userRow">
            <td rowSpan={2}>
              <input type="image" alt="photo" src={usersItem.picture.thumbnail} />
            </td>
            <td>
              {usersItem.name.first +
                ' ' +
                usersItem.name.last +
                ',  дата регистрации: ' +
                usersItem.registered.date}
            </td>
          </tr>
          <tr>
            <td>{usersItem.email}</td>
          </tr>
        </React.Fragment>
      </>
    );
  else {
    return <></>;
  }
};
