import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { UserRow } from './UserRow';

export default () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.fetchedUsers); // обозначаем селектор, что нам нужно достать из стора

  if (!users.length) {
    return (
      <tr>
        <td>
          <button className="btn btn-primary" onClick={() => dispatch(fetchUsers())}>
            Найти
          </button>
        </td>
      </tr>
    );
  }
  return users.map((user, i) => <UserRow incomes={user} key={i} />);
};
