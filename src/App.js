import React from 'react';

import { Answers } from './components/Answers';

import './App.css';

const arr = [
  { eng: 'neighborhood', rus: 'соседство' },
  { eng: 'uncomfortable', rus: 'не комфортний' },
  { eng: 'tiny', rus: 'маленький' },
  { eng: 'tasteless', rus: 'безвкусний' },
  { eng: 'tasteful', rus: 'зі смаком' },
  { eng: 'sweep', rus: 'підмітати' },
  { eng: 'stairs', rus: 'сходи' },
  { eng: 'skylight', rus: 'стікляна криша' },
  { eng: 'roomy', rus: 'просторий' },
  { eng: 'rent', rus: 'орендувати' },
  { eng: 'porch', rus: 'веранда' },
  { eng: 'paint', rus: 'фарбувати' },
  { eng: 'move', rus: 'переїзд' },
  { eng: 'lock', rus: 'замок' },
  { eng: 'lawn', rus: 'газон' },
];
const arrAnswer = [];

function App() {
  const [num, setNum] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [str, setStr] = React.useState('соседство');
  let findEng = arr[num].eng;
  let findRus = arr[num].rus;

  const heandleOption = e => setStr(e.target.value);

  const clickNext = () => {
    if (findRus === str) {
      arrAnswer.push({ eng: findEng, rus: str });
    }
    setNum((prev) => prev + 1);
    if (num > 13) {
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
        <h1>English translete:</h1>
        <h2>
          {findEng} -{' '}
          <select onChange={heandleOption}>
            {arr.map((item) => (
              <option
                key={item.eng}
                value={item.rus}>
                {item.rus}
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
