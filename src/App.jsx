import { useContext } from 'react'
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeProvider'

function App() {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={`body ${isDark?"body-dark":""}`}>
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default App
