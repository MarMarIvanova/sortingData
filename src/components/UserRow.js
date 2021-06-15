import React, { useContext, useState } from 'react';
import { Context } from '../context';

export const UserRow = ({ usersItem }) => {
  const { needRender, searchStringUsers } = useContext(Context);

  const dragStartHandler = (e, usersItem) => {
    console.log('drag ', usersItem);
  };

  const dragLeaveHandler = (e) => {};

  const dragEndHandler = (e) => {};

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, usersItem) => {
    e.preventDefault();
    console.log('drop ', usersItem);
  };

  if (
    needRender &&
    (usersItem.name.first.toUpperCase().includes(searchStringUsers.toUpperCase()) ||
      usersItem.name.last.toUpperCase().includes(searchStringUsers.toUpperCase()))
  ) {
    // var nowDate = new Date().toLocaleDateString();

    let startPos = usersItem.name.first.toUpperCase().indexOf(searchStringUsers.toUpperCase());

    let startPosLast = usersItem.name.last.toUpperCase().indexOf(searchStringUsers.toUpperCase());

    if (startPos >= 0) {
      return (
        <>
          <React.Fragment>
            <tr
              name="userRow"
              onDragStart={(e) => dragStartHandler(e, usersItem)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, usersItem)}
              draggable={true}
            >
              <td rowSpan={2}>
                <input type="image" alt="photo" src={usersItem.picture.thumbnail} />
              </td>
              <td>
                {usersItem.name.first.substr(0, startPos)}
                <span className="hilite">
                  {usersItem.name.first.substr(startPos, searchStringUsers.length)}
                </span>
                {usersItem.name.first.substr(startPos + searchStringUsers.length) +
                  ' ' +
                  usersItem.name.last +
                  ',  дата регистрации: ' +
                  new Date(usersItem.registered.date).toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <td>{usersItem.email}</td>
            </tr>
          </React.Fragment>
        </>
      );
    } else {
      if (startPosLast >= 0) {
        return (
          <>
            <React.Fragment>
              <tr
                name="userRow"
                onDragStart={(e) => dragStartHandler(e, usersItem)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, usersItem)}
                draggable={true}
              >
                <td rowSpan={2}>
                  <input type="image" alt="photo" src={usersItem.picture.thumbnail} />
                </td>
                <td>
                  {usersItem.name.first + ' ' + usersItem.name.last.substr(0, startPosLast)}
                  <span className="hilite">
                    {usersItem.name.last.substr(startPosLast, searchStringUsers.length)}
                  </span>
                  {usersItem.name.last.substr(startPosLast + searchStringUsers.length) +
                    ' ' +
                    ',  дата регистрации: ' +
                    new Date(usersItem.registered.date).toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td>{usersItem.email}</td>
              </tr>
            </React.Fragment>
          </>
        );
      }
    }
  } else {
    return <></>;
  }
};
