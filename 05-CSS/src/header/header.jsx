import React from 'react'
import style from './header.module.css'
function header() {
  return (
    <div className={style.head}>
       <h3 className={style.home}>Home🏠</h3>
       <button>Login</button>
    </div>
  )
}

export default header
 