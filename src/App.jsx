import { useState } from "react"

function App() {
  
  const [input, setInput] = useState(''); // Введені данні
  
  const numInput = (n) => setInput((...input) => input + `${n}`);
  const sym = (s) => {
    setInput((...input) => input + `${s}`);
  };
  const calculate = () => {
   try {
    const value = eval(input);
    setInput(value);
   } catch (error) {
    setInput("Помилка")
   }
  }

  return (
    <main>
      <span>{input}</span>
      <section>
        <button onClick={() => setInput('')} style={{background: '#9a9a9a', color: "black"}}>AC</button>
        <button onClick={() => numInput(1)}>1</button>
        <button onClick={() => numInput(2)}>2</button>
        <button onClick={() => numInput(3)}>3</button>
        <button onClick={() => sym('+')} className="right">+</button>
        <button onClick={() => numInput(4)}>4</button>
        <button onClick={() => numInput(5)}>5</button>
        <button onClick={() => numInput(6)}>6</button>
        <button onClick={() => sym('-')} className="right">-</button>
        <button onClick={() => numInput(7)}>7</button>
        <button onClick={() => numInput(8)}>8</button>
        <button onClick={() => numInput(9)}>9</button>
        <button onClick={() => sym('/')} className="right">/</button>
        <button onClick={() => numInput(0)}>0</button>
        <button onClick={() => numInput('00')}>00</button>
        <button onClick={() => numInput('.')}>.</button>
        <button onClick={() => sym('*')} className="right">*</button>
        <button onClick={() => calculate()} id="calc" className="right">=</button>
      </section>
    </main>
  )
}

export default App
