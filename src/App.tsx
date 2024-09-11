import { useState } from 'react'
import './App.css'
import Circle from "./components/Circle/Circle.tsx";

const App = () => {
  const arrNumbers = [5, 11, 16, 23, 32];

  const [numbers, setNumbers] = useState<number[]>(arrNumbers);

  return (
    <>
     <Circle number={arrNumbers[4]} />
    </>
  )
};

export default App
