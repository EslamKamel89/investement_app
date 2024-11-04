import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 1000,
    annaulInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
