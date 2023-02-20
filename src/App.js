import React from 'react';

import { Answers } from './components/Answers';
import { arr, arrSort } from './components/back/back';

import './App.css';
import { SetWord } from './components/setWord/SetWord';

const arrAnswer = [];

function App() {
  const [pageButton, setPageButton] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [flagWord, setFlagWord] = React.useState(false); 
  const [str, setStr] = React.useState(arr[pageButton][0].rus);
  const [wordEng, setWordEng] = React.useState('');
  const [wordUkr, setWordUkr] = React.useState('');
  let findEng = arr[pageButton][num].eng;
  let findRus = arr[pageButton][num].rus;

  const heandleOption = (e) => setStr(e.target.value);

  const clickNext = () => {
    if (findRus !== str) {
      alert(`ти що даун ? це ж = (${findRus})`)
    }
    if (findRus === str) {
      arrAnswer.push({ eng: findEng, rus: str });
      console.log(findRus, str, arrAnswer);
    }
    setNum((prev) => prev + 1);
    if (num >= arr[pageButton].length - 1) {
      setNum(0);
      setFlag((prev) => !prev);
    }
  };

  if (flagWord) {
    return <SetWord wordEng={wordEng} setWordEng={setWordEng} wordUkr={wordUkr} setWordUkr={setWordUkr} setFlagWord={setFlagWord} arr={arr}/>;
  }

  if (flag) {
    return <Answers arrAnswer={arrAnswer} setFlag={setFlag} />;
  }

  return (
    <>
      <div className="app">
      {arr.map((_, i)=> <button onClick={()=> setPageButton(i)}>{i + 1} page</button>)}
        <div className='app-header'>
          <h1>English translete:</h1>
          <button className='app-button' onClick={()=> setFlagWord(prev => !prev)}>Добавити слова</button>
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
          next ask
        </button>
      </div>
    </>
  );
}

export default App;
