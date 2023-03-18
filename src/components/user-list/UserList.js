import styles from './UserList.module.css';
import React from 'react';
import UserData from './user-data/UserData';

const UserList = (props) => {
  return (
    <div className={styles.back}>
      {props.usersTable.map((user) => {
        return <UserData key={user.id} userInput={user} />;
      })}
    </div>
  );
};

export default UserList;
