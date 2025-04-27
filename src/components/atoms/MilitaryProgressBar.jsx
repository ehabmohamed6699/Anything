import React from 'react'
import { MdCheck } from 'react-icons/md'
import './style.css'
import { FaCheck } from 'react-icons/fa'

const MilitaryProgressBar = ({months}) => {
  return (
    <div className='months-container'>
        {Array(months).fill(null).map((_, index) => <>
            <p key={index} className='month-complete'>
                <FaCheck/>
            </p>
            {months === 12 && index === months - 1 ? "": <div className={`bar ${index < months - 1 ? "bar-complete":""}`}></div>}
        </>)}
        {Array(12 - months).fill(null).map((_, index) => <>
            <p key={index} className={`month-remain ${!index && "next-month"}`}>
                {index + months + 1}
            </p>
            {index !== (12 - months - 1) && <div className="bar"></div>}
        </>)}
    </div>
  )
}

export default MilitaryProgressBar