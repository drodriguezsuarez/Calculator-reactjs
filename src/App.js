import './App.css';
import calculatorLogo from './images/logo.png';
import Button from './components/Button';
import Screen from './components/Input';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Syntax error");
    }
  };

  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <img
          src={calculatorLogo}
          className='calculator-logo'
          alt='logo calculator' />
      </div>
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>%</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>AC</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
