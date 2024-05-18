import { useState } from "react"

function App() {
  
  const [input, setInput] = useState(''); // Введені данні
  const [result, setResult] = useState();
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  const symbols = ['+', '-', '*', '/'];
  
  const numInput = (n) => setInput((...input) => input + `${n}`);
  const sym = (s) => {
    setInput((...input) => input + `${s}`);
  };
  const calculate = () => {
    for (let i = 0; i < symbols.length; i++) {
      if (input[input.length - 1] == symbols[i]) {
        return;
      }
    }

    const value = eval(input);
    setResult(value);
  }

  return (
    <main>
      <span>{input}</span>
      <section>
        <button onClick={() => numInput(1)}>1</button>
        <button onClick={() => numInput(2)}>2</button>
        <button onClick={() => numInput(3)}>3</button>
        <button onClick={() => numInput(4)}>4</button>
        <button onClick={() => numInput(5)}>5</button>
        <button onClick={() => numInput(6)}>6</button>
        <button onClick={() => numInput(7)}>7</button>
        <button onClick={() => numInput(8)}>8</button>
        <button onClick={() => numInput(9)}>9</button>
        <button onClick={() => sym('+')}>+</button>
        <button onClick={() => numInput(0)}>0</button>
        <button onClick={() => sym('-')}>-</button>
        <button onClick={() => sym('/')}>/</button>
        <button onClick={() => sym('*')}>*</button>
        <button onClick={() => {setInput(''); setResult('')}}>Reset</button>
        <button onClick={() => calculate()} id="calc" style={{ width: '100%' }}>=</button>
      </section>
      <span>{result}</span>
    </main>
  )
}

export default App
