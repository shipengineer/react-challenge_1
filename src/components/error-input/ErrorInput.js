import React from 'react';
import styles from './ErrorInput.module.css';
const ErrorInput = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>

      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Некорректый ввод</h2>
        </header>
        <div className={styles.content}>
          <p>Эти поля не могут ыбть пустыми</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onCloseModal}>Закрыть</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorInput;
