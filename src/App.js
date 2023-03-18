import { useState } from 'react';
import UserInput from './components/user-input/UserInput';
import UserList from './components/user-list/UserList';
const STATIC_USERS = [
  { id: 'n1', name: 'John', age: 18 },
  { id: 'n2', name: 'YouRa', age: 25 },
];
const App = () => {
  const [recivedUser, setUsers] = useState(STATIC_USERS);
  const addUser = (user) => {
    setUsers((prevTable) => {
      console.log([user, ...prevTable]);
      return [user, ...prevTable];
    });
  };
  return (
    <div>
      <UserInput onAddUser={addUser} />
      <UserList usersTable={recivedUser} />
    </div>
  );
};

export default App;
