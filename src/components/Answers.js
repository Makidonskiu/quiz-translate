import React from 'react'
import './Answer.css'

export const Answers = ({arrAnswer, setFlag}) => {
    let ask = '';
    const lengthAsk = arrAnswer.length;
    if(lengthAsk < 5) ask = `Ебать ты лох , я был о тебе лучшего мнения`
    if(lengthAsk < 10 && lengthAsk > 4) ask = `ну вроде ти не полный лох`
    if(lengthAsk > 9 && lengthAsk < 15) ask = `Ебать ты даже что-то учил )))`
    if(lengthAsk === 15) ask = `Я не зрозумів ти що зубрив всю ніч ? Мої вітання YOU WINNER )))`
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
