import { useState } from 'react';
import ErrorInput from './components/error-input/ErrorInput';
import UserInput from './components/user-input/UserInput';
import UserList from './components/user-list/UserList';
const STATIC_USERS = [
  { id: 'n1', name: 'John', age: 18 },
  { id: 'n2', name: 'YouRa', age: 25 },
];
const App = () => {
  const [newTableUser, setUsers] = useState(STATIC_USERS);
  const [newValid, setValid] = useState(true);

  const addUser = (user) => {
    if (user.name !== '' && user.age !== '') {
      setUsers((prevTable) => {
        return [user, ...prevTable];
      });
    } else {
      setValid(!newValid);
    }
  };
  const closeModalHandler = () => {
    setValid(true);
  };
  console.log(newTableUser);
  if (newValid) {
    return (
      <div>
        <UserInput onAddUser={addUser} />
        <UserList usersTable={newTableUser} />
      </div>
    );
  } else {
    return <ErrorInput onCloseModal={closeModalHandler} />;
  }
};

export default App;
