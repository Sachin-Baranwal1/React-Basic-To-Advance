import React from 'react'
import styles from './footer.module.css'

function footer() {
  return (
    <div>
      <h2 className={styles.head}> Do yo want to be rich.</h2>
      <button className={styles.btn}>YES</button>
    </div>
  )
}

export default footer
