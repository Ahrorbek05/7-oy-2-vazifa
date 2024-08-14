import React, { useState, useEffect } from 'react';
import styles from './card.module.css';

function Test() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch('http://localhost:3000/machines?page=6&limit=20');
        const data = await response.json();
        setMachines(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
