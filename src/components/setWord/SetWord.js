import React from 'react';
import './style.css';

export const SetWord = ({ wordEng, wordUkr, setWordEng, setWordUkr, setFlagWord, setArray }) => {
  const [wordArr, setWordArr] = React.useState([]);
  const [inputChange1, setInputChange1] = React.useState('');
  const [inputChange2, setInputChange2] = React.useState('');
  const [changeWord, setChangeWord] = React.useState(null);

  const heandleClickAdd = () => {
    if (wordEng !== '' && wordUkr !== '') {
      if (!/[a-zA-Z]/.test(wordEng)) {
        alert('Ви ввели перше поле на кирилиці');
        setWordEng('');
        return;
      }
      if (/[a-zA-Z]/.test(wordUkr)) {
        alert('Ви ввели друге поле на латиниці');
        setWordUkr('');
        return;
      }
      setWordArr([...wordArr, { eng: wordEng, rus: wordUkr }]);
      setWordEng('');
      setWordUkr('');
    } else {
      alert('будьласка завніть всі поля');
    }
  };

  const heandleClickDelete = (engWord) => {
    setWordArr(wordArr.filter((item) => item.eng !== engWord));
  };

  const heandleClickSave = (id) => {
    const newTodo = [...wordArr].map((item, i) => {
      if (i === id) {
        if (inputChange1 === '' && inputChange2 === '') {
          alert('будьласка завніть всі поля');
        } else if (!/[a-zA-Z]/.test(inputChange1)) {
          alert('Ви ввели перше поле на кирилиці');
          setWordEng('');
        } else if (/[a-zA-Z]/.test(inputChange2)) {
          alert('Ви ввели друге поле на латиниці');
          setWordUkr('');
        } else {
          item.eng = inputChange1;
          item.rus = inputChange2;
        }
      }
      return item;
    });
    setWordArr(newTodo);
    setInputChange1('');
    setInputChange2('');
  };

  const heandleClickAddPage = () => {
    if (wordArr.length === 0) {
      alert('Немає що зберігати');
      return;
    }
    setArray(wordArr);
    setFlagWord((prev) => !prev);
  };

  const backExit = () => {
    setFlagWord((prev) => !prev);
  };

  return (
    <div className="input-word">
      <div>
        <div className="flex">
          <div className="margine flex">
            <input
              value={wordEng}
              onChange={(e) => setWordEng(e.target.value)}
              placeholder="Введіть англ. слово"
            />
            <p>--</p>
            <input
              value={wordUkr}
              onChange={(e) => setWordUkr(e.target.value)}
              placeholder="Введіть укр. слово"
            />
          </div>
          <button onClick={heandleClickAdd}>Добавити</button>
        </div>
        <div>
          {wordArr.map((item, i) =>
            changeWord === item.eng ? (
              <div key={item.eng + item.rus + i} className="flex">
                <input
                  value={inputChange1}
                  onChange={(e) => setInputChange1(e.target.value)}
                  placeholder="Введіть англ. слово"
                />
                <p>-</p>
                <input
                  value={inputChange2}
                  onChange={(e) => setInputChange2(e.target.value)}
                  placeholder="Введіть укр. слово"
                />
                <button onClick={() => heandleClickSave(i)}>зберігти</button>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }} key={item.eng + item.rus + i}>
                <div className="flex">
                  <p>
                    {item.eng} -- {item.rus}
                  </p>
                  <div>
                    <button onClick={() => setChangeWord(item.eng)}>змінити</button>
                    <button onClick={() => heandleClickDelete(item.eng)}>видалити</button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="add-page">
        <button className='m-rigth' onClick={heandleClickAddPage}>Зберегти сторінку</button>
        <button onClick={backExit}>Назад</button>
      </div>
    </div>
  );
};
