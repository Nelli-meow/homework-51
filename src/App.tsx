import { useState } from 'react'
import './App.css'
import Circle from "./components/Circle/Circle.tsx";

const App = () => {

  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const getNewNumber = () => {
      const newNumbers: number[] = [];

      while(newNumbers.length < 5) {
          const randomNumber = Math.floor(Math.random() * 32) + 5;

          if(!newNumbers.includes(randomNumber)) {
              newNumbers.push(randomNumber);
          }
      }

      newNumbers.sort((a, b) => a - b);
      setNumbers(newNumbers);
  }

  return (
    <>
        <div className="container">
            {numbers.map((number) => (
                <Circle number={number} />
            ))}

            <button  type="button" className="getNewNumberBtn">New numbers</button>
        </div>
    </>
  )
};

export default App
