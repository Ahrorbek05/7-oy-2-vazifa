import React from 'react';
import styles from './test.module.css';

function Test({ machines }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {machines.map((machine, index) => (
          <div key={index} className={styles.card}>
            <img src={machine.image} alt={machine.title} />
            <h2>{machine.title}</h2>
            <h3>{machine.year}</h3>
            <p>{machine.startProduction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
