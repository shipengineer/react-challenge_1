import styles from './UserData.module.css';
import React from 'react';

const UserData = (props) => {
  return (
    <label className={styles.label}>
      {props.userInput.name} - {props.userInput.age} лет
    </label>
  );
};

export default UserData;
