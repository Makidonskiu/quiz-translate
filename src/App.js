import React from 'react';

import { Answers } from './components/answer/Answers';
import { arr, arrSort } from './components/back/back';

import './App.css';
import { SetWord } from './components/setWord/SetWord';


function App() {
  const [array, setArray] = React.useState(arr); 
  const [pageButton, setPageButton] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const [arrAnswer, setArrAnswer] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [flagWord, setFlagWord] = React.useState(false); 
  const [str, setStr] = React.useState(array[pageButton][0].rus);
  const [wordEng, setWordEng] = React.useState('');
  const [wordUkr, setWordUkr] = React.useState('');
  let findEng = array[pageButton][num].eng;
  let findRus = array[pageButton][num].rus;
  
  const speakEng = () => {
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(findEng)
      );
  }

  const speakUkr = (text) => {
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
      );
  }
  

  const heandleOption = (e) => {
    setStr(e.target.value);
    speakUkr(e.target.value)
  };


  const clickNext = () => {
    if (findRus !== str) {
      // alert(`Не вірно !!! Правильна відповідь = (${findRus})`)
    }
    if (findRus === str) {
      setArrAnswer([...arrAnswer, {eng: findEng, rus: str}])
    }
    setNum((prev) => prev + 1);
    if (num >= array[pageButton].length - 1) {
      setNum(0);
      setFlag((prev) => !prev);
    }
  };

  if (flagWord) {
    return <SetWord wordEng={wordEng} setWordEng={setWordEng} wordUkr={wordUkr} setWordUkr={setWordUkr} setFlagWord={setFlagWord} setArray={setArray}/>;
  }

  if (flag) {
    return <Answers arrAnswer={arrAnswer} setArrAnswer={setArrAnswer} setFlag={setFlag} arrPageLength = {array[pageButton].length}/>;
  }

  return (
    <>
      <div className="app">
          <h2>Перевірка знань англійського:</h2>
        <div className='app-header'>
          <div>
            {array.map((_, i)=> <button key={i} onClick={()=> setPageButton(i)}>{i + 1} page </button> )}
          </div>
          <div className='app-header'>
            <button className='app-button' onClick={()=> setFlagWord(prev => !prev)}>Добавити слова</button>
          </div>
        </div>
        <h2>
          {findEng} -{' '}
          <select onChange={heandleOption}>
            {arrSort(pageButton).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </h2>
        <button onClick={clickNext} className="button">
          наступне слово
        </button>
        <button onClick={speakEng} className="button">
          Прослухати англ. слово
        </button>
      </div>
    </>
  );
}

export default App;
