import React from 'react';
import './style.css';

export const SetWord = ({ wordEng, wordUkr, setWordEng, setWordUkr, setFlagWord, arr}) => {
  const [wordArr, setWordArr] = React.useState([]);
  const [inputChange1, setInputChange1] = React.useState('');
  const [inputChange2, setInputChange2] = React.useState('');
  const [changeWord, setChangeWord] = React.useState(null); 

  const heandleClickAdd = () => {
    if (wordEng !== '' && wordUkr !== '') {
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
        if(inputChange1 !== '' && inputChange2 !== ''){
            item.eng = inputChange1;
            item.rus = inputChange2;
        }else{
            alert('будьласка завніть всі поля');
        }
      }
      return item;
    });
    setWordArr(newTodo);
  };

  const heandleClickAddPage = () => {
    // let res = confirm('Ви впевнені що хочете зберігти ці слова');
        arr.push(wordArr)
        setFlagWord(prev => !prev)
  }

  return (
    <div className="input-word">
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
        <button onClick={heandleClickAdd}>Add</button>
      </div>
      <div>
        {wordArr.map((item, i) =>
          changeWord === item.eng ? (
            <div className="flex">
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
              <button onClick={() => heandleClickSave(i)}>save</button>
            </div>
          ) : (
            <div style={{textAlign: 'center'}} key={item.eng + item.rus}>
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
        <button onClick={heandleClickAddPage}>Add page</button>
    </div>
  );
};
