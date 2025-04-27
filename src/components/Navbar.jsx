import React from 'react'
import ModeSwitch from './atoms/ModeSwitch'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ModeSwitch/>
        <p>Theme toggle made using <a href="https://zustand.docs.pmnd.rs/">Zustand</a></p>
    </div>
  )
}

export default Navbar