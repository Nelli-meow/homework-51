import { useState } from 'react'
import './App.css'
import Circle from "./components/Circle/Circle.tsx";

const App = () => {
  const numbers = [5, 11, 16, 23, 32];

  return (
    <>
     <Circle number={numbers[4]} />
    </>
  )
};

export default App
