import React, { useEffect, useState } from 'react';
import styles from './test.module.css';

function Test() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/machines?page=5&limit=20')
      .then(response => response.json())
      .then(data => Array.isArray(data) ? setMachines(data) : console.log('Malumot!:', data))
      .catch(error => console.log('Qandaydir xatolik:', error));
  }, []);

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
