import React, { useState, useEffect } from 'react';
import styles from './test.module.css';
import data from '../../assets/data/data.json';

function Test() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    setMachines(data);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {machines.map((machine, index) => (
          <div key={index} className={styles.card}>
            <img src={machine.image} alt={machine.title} />
            <h2>{machine.title}</h2>
            <h3>{machine.start_production}</h3>
            <p>{machine.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
