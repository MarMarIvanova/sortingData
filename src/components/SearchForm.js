import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../redux/actions';
//import FavoriteUsers from './FavoriteUsers';
import { Loader } from './Loader';
import { UserTable } from './UserTable';
import { Context } from '../context';
import $ from 'jquery';

const SearchForm = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: '',
  //   };
  // }

  const [searchString, setSearchString] = useState('');
  const [renderTable, setrenderTable] = useState(false);

  //const dispatch = useDispatch();
  //const users = useSelector((state) => state.users.fetchedUsers); // обозначаем селектор, что нам нужно достать из стора
  //const loading = useSelector((state) => state.app.loading);

  const [users, setUsers] = useState(['']);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loader />;

  const submitHandler = (event) => {
    event.preventDefault();

    const title = searchString;

    if (title.length < 1) {
      return;
    }
    setrenderTable(true);
    getUsers();
    //dispatch(fetchUsers());
  };

  const changeValueHandler = (event) => {
    event.persist();
    setrenderTable(false);
    setSearchString(event.target.value);

    // event.setState((prev) => ({
    //   ...prev,
    //   ...{
    //     [event.target.name]: event.target.value,
    //   },
    // }));
  };
  const getUsers = () => {
    setLoading(true);
    $.ajax({
      url: 'https://randomuser.me/api/?results=5000&inc=name,email,registered,picture',
      dataType: 'json',
      success: (response) => {
        setUsers(response.results);
        setLoading(false);
      },
    });
  };

  return (
    <Context.Provider
      value={{ loading, users: users, searchStringUsers: searchString, needRender: renderTable }}
    >
      <>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="searchInput">Поиск по имени или фамилии</label>
            <input
              autoComplete="off"
              id="searchInput"
              name="title"
              type="text"
              value={searchString}
              onChange={(e) => {
                changeValueHandler(e);
              }}
              className="form-control"
            />
          </div>
        </form>
        <div className="row">
          <div className="col">
            <h1>
              <div id="searchInputValue" name="title">
                {searchString}
              </div>
            </h1>
          </div>
          <div className="col">
            <h1>Избранное</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UserTable
            // needRender={renderTable}
            // searchStringUsers={searchString}
            // usersTable={users}
            />
          </div>
          <div className="col">{/* <FavoriteUsers /> */}</div>
        </div>
        {/* <SearchBtn /> */}
      </>
    </Context.Provider>
  );
};

export default SearchForm;
