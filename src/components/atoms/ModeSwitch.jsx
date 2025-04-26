import React, { useContext } from 'react'
import './style.css'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import ThemeProvider, { ThemeContext } from '../../context/ThemeProvider'

const ModeSwitch = () => {
    const {isDark, setIsDark} = useContext(ThemeContext)
  return (
    <div className={`switch ${isDark ? "switch-dark":""}`} onClick={() => {
        setIsDark(!isDark)
    }}>
        <div className={`switch-btn ${isDark ? "switch-btn-dark":"switch-btn-light"}`}>
            {!isDark?<MdOutlineLightMode />:<MdOutlineDarkMode />}
        </div>
    </div>
  )
}

export default ModeSwitch