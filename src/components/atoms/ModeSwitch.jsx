
import './style.css'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from '../../zustand/theme'

const ModeSwitch = () => {
    const isDark = useTheme(state => state.isDark)
    const toggleTheme = useTheme(state => state.toggleTheme)

    return (
      <div className="switch" onClick={toggleTheme}>
          <div className="switch-btn">
              {!isDark?<MdOutlineLightMode />:<MdOutlineDarkMode />}
          </div>
      </div>
    )
}

export default ModeSwitch