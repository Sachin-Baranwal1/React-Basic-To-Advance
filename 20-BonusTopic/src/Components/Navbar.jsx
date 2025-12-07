import React from 'react'

const Navbar = (props) => {
  function ChangeTheme(){
     props.settheme((prev) => (prev == 'Light' ? 'Dark' : 'Light'));     

  }
  return (
    <div>
        <button className='m-5 p-3 bg-emerald-800 rounded ' onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
