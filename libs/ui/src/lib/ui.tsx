import styles from './ui.module.css';
import random from 'lodash/random';

export function Ui() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      {random(1, 10)}
    </div>
  );
}

export default Ui;
