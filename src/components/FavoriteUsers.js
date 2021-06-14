import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const FavoriteUsers = ({ newUser }) => {
  if (!newUser.length) {
    return <p className="text-center">В избранном пусто</p>;
  }
  return newUser.map((user) => <User user={user} key={user.id} />);
};

const mapStateToProps = (state) => {
  return {
    newUser: state.users.users,
  };
};
export default connect(mapStateToProps)(FavoriteUsers);
