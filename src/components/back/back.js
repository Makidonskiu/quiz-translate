export let arr = [
  [
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
  ],
  [
    { eng: 'joy', rus: 'радість' },
    { eng: 'leadership', rus: 'лідерство' },
    { eng: 'loyal', rus: 'вірний' },
    { eng: 'modest', rus: 'скромний' },
    { eng: 'mood', rus: 'настрій' },
    { eng: 'motevated', rus: 'цілеспрямований' },
    { eng: 'patient', rus: 'терплячий' },
    { eng: 'personality', rus: 'особа' },
    { eng: 'reasonable', rus: 'продуманий' },
    { eng: 'selfish', rus: 'егоїстичний' },
    { eng: 'sensible', rus: 'логічний' },
    { eng: 'stingy', rus: 'скупий' },
    { eng: 'tactful', rus: 'тактичний' },
    { eng: 'timid', rus: "сором'язливий" },
    { eng: 'trustworthy', rus: 'надійний' },
  ],
];

export const arrSort = (i) => {
  return arr[i].map((item) => item.rus).sort();
};
