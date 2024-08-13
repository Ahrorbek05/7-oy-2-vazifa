import React from 'react'
import styles from './loading.module.css'

function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.loading}>
        <div className={styles.bounceball}></div>
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

export default Loading