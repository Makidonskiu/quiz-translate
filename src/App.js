import React from 'react';

import { Answers } from './components/Answers';
import { arr, arrSort } from './components/back/back';

import './App.css';

const arrAnswer = [];

function App() {
  const [indexButton, setIndexButton] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [str, setStr] = React.useState('зі смаком');
  let findEng = arr[indexButton][num].eng;
  let findRus = arr[indexButton][num].rus;

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
    if (num >= arr[indexButton].length - 1) {
      setNum(0);
      setFlag((prev) => !prev);
    }
  };

  if (flag) {
    return <Answers arrAnswer={arrAnswer} setFlag={setFlag} />;
  }

  return (
    <>
      <div className="app">
      {arr.map((_, i)=> <button onClick={()=> setIndexButton(i)}>{i + 1} page</button>)}
        <h1>English translete:</h1>
        <h2>
          {findEng} -{' '}
          <select onChange={heandleOption}>
            {arrSort(indexButton).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </h2>
        <button onClick={clickNext} className="button" style={{ background: 'green' }}>
          next ask
        </button>
      </div>
    </>
  );
}

export default App;
