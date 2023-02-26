import React from 'react'
import './Answer.css'

export const Answers = ({arrAnswer, setFlag, arrPageLength, setArrAnswer}) => {
    let ask = '';
    const lengthAsk = arrAnswer.length;
    if(lengthAsk < Math.floor(arrPageLength/3)) ask = `Тобі зарано ще здавати такі тести`
    if(lengthAsk < Math.floor(arrPageLength/2) && lengthAsk >= Math.floor(arrPageLength/3)) ask = `Ти поки не добре знаєш англійську`
    if(lengthAsk >= Math.floor(arrPageLength/2) && lengthAsk < arrPageLength) ask = `Дуже добре, ти майже відповів на всі запитання )))`
    if(lengthAsk === arrPageLength) ask = `Молодець, ти дуже добре знаєш ці слова )))`
    const back = () => {
        setFlag(prev => !prev)
        setArrAnswer([]);
    }
  return (
    <div className='answer'>
        <h2>{ask}</h2>
        <h3>ти зміг відповісти на {arrAnswer.length} запитання(-нь)</h3>
        <button onClick={back}>Спробувати ще</button>
    </div>
  )
}
