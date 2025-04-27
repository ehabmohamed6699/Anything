import React, { useState } from 'react'
import './style.css'
import rock from '../../assets/images/rock.png'
import paper from '../../assets/images/paper.png'
import scissors from '../../assets/images/scissors.png'
const RockPaperScissors = () => {
    const imgs = [rock, paper, scissors]
    const [gameOver, setGameOver] = useState(false)
    const [gameStatus, setGameStatus] = useState("")
    const [selectedOption, setSelectedOption] = useState(-1)
    const [computerSelection, setComputerSelection] = useState(Math.floor(Math.random() * 3))
    
    const runGame = (choice) =>{
        setSelectedOption(choice)
        if(choice === computerSelection){
            setGameStatus("Draw!")
        }else if((choice === 0 && computerSelection === 2) || (choice === 1 && computerSelection === 0) || (choice === 2 && computerSelection === 1)){
            setGameStatus("You Win!")
        }else{
            setGameStatus("You Lose")
        }
        setGameOver(true)
    }

    const reset = () => {
        setGameOver(false)
        setGameStatus("")
        setComputerSelection(Math.floor(Math.random() * 3))
    }
    return (
    <div className='rock-paper-scissors-container'>
        <h1>Let's play rock paper scissors</h1>
        {gameOver?<>
            <div className="result">
                <div className="result-card">
                    <p>You</p>
                    <img src={imgs[selectedOption]} alt="" width={150}/>
                </div>
                <p>vs</p>
                <div className="result-card">
                    <p>Computer</p>
                    <img src={imgs[computerSelection]} alt="" width={150}/>
                </div>
            </div>
            <h3>{gameStatus}</h3>
            <button onClick={reset} className='reset-btn'>Play Again</button>
        </>:<>
            <p>Choose your role</p>
        <div className="roles-choice">
            <button onClick={() => {
                runGame(0)
            }}>
                <img src={rock} alt="" width={150}/>
                <p>Rock</p>
            </button>
            <button onClick={() => {
                runGame(1)
            }}>
                <img src={paper} alt="" width={150}/>
                <p>Paper</p>
            </button>
            <button onClick={() => {
                runGame(2)
            }}>
                <img src={scissors} alt="" width={150}/>
                <p>Scissors</p>
            </button>
        </div></>}
    </div>
  )
}

export default RockPaperScissors