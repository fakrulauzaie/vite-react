import { useState } from 'react';

const Password = () => {
  const [inputs, setInputs] = useState([[], [], [], [], []]);
  
  const rightChoices = [
    'about',
    'after',
    'again',
    'below',
    'could',
    'every',
    'first',
    'found',
    'great',
    'house',
    'large',
    'learn',
    'never',
    'other',
    'place',
    'plant',
    'point',
    'right',
    'small',
    'sound',
    'spell',
    'still',
    'study',
    'their',
    'there',
    'these',
    'thing',
    'think',
    'three',
    'water',
    'where',
    'which',
    'world',
    'would',
    'write',
  ];
  const [possibleAnswers, setPossibleAnswers] = useState(rightChoices);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    const addedValue = event.target.value;
    newInputs[index] = addedValue.split('');
    setInputs(newInputs);

    const filteredChoices = rightChoices.filter(choice => {
      for (let i = 0; i < newInputs.length; i++) {
        if (newInputs[i].length === 0) continue;
        if (!newInputs[i].includes(choice[i])) return false;
      }
      return true;
    });
    setPossibleAnswers(filteredChoices);
  };

  return (
    <div>
    <div className="passcode-container">
      <form>
        {[0, 1, 2, 3, 4].map(index => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={inputs[index].join('')}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
      </form>

    </div>
    <h2>Possible Answers:</h2>

<div className="possible-answers-container">
  <ul className="possible-answers-list">
    {possibleAnswers.map((answer, index) => (
      <li key={index} className={possibleAnswers.length === 1 ? 'exact-answer' : ''}>
        {answer}
      </li>
    ))}
  </ul>
</div>
  </div>
  );
};

export default Password;