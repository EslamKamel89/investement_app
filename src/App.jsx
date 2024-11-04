import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";
import { pr } from './pr';
function App() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 1000,
    annaulInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  pr('App rebuild');
  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      {!inputIsValid && <p id="result">Please Enter Duration greater than zero</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
