import styles from './UserInput.module.css';
import React, { useState } from 'react';

const UserInput = (props) => {
  const [nameToSend, setName] = useState('');
  const [ageToSend, setAge] = useState('');
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const sendUserToBase = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random().toString(),
      name: nameToSend,
      age: ageToSend,
    };
    console.log(newUser);
    props.onAddUser(newUser);
    setAge('');
    setName('');
  };
  return (
    <form className={styles.back} onSubmit={sendUserToBase}>
      <label className={styles.label}>Имя</label>
      <input
        type='text'
        className={styles.input}
        onChange={nameChangeHandler}
        value={nameToSend}
      ></input>
      <label className={styles.label}>Возраст</label>
      <input
        type='text'
        className={styles.input}
        onChange={ageChangeHandler}
        value={ageToSend}
      ></input>
      <button type='submit' className={styles.button}>
        Добавить пользователя
      </button>
    </form>
  );
};

export default UserInput;
