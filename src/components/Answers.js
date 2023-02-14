import React from 'react'
import './Answer.css'

export const Answers = ({arrAnswer, setFlag}) => {
    let ask = ''
    if(arrAnswer.length < 5) ask = `Ебать ты лох , я был о тебе лучшего мнения`
    if(arrAnswer.length < 10 && arrAnswer.length > 5) ask = `ну вроде ти не полный лох`
    if(arrAnswer.length > 10 && arrAnswer.length < 15) ask = `Ебать ты даже что-то учил )))`
    const back = () => {
        setFlag(prev => !prev)
        arrAnswer.length = 0;
    }
  return (
    <div className='answer'>
        <h2>{ask}</h2>
        <h3>ти зміг відповісти на {arrAnswer.length} запитання(-нь)</h3>
        <button onClick={back}>replay</button>
    </div>
  )
}
