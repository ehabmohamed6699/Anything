import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import MilitaryProgress from './components/MilitaryProgress'
import RockPaperScissors from './components/rockPaperScissors/RockPaperScissors'
import Quotes from './components/quotes/Quotes'
import { useTheme } from './zustand/theme'

function App() {
  const isDark = useTheme(state => state.isDark)
  return (
    <div className={`body ${isDark?"body-dark":""}`}>
      <Navbar/>
      <Landing/>
      <MilitaryProgress/>
      <RockPaperScissors/>
      <Quotes/>
    </div>
  )
}

export default App
