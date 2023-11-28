import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {

  const [userInput, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const InputisValid = userInput.duration >=1;

  const changeHandler = (identifier, newValue) => {
    setInput((prevValue) => {
      return {
        ...prevValue,
        [identifier]: +newValue,
      };
    });
  };

  return (
    <div>
    <Header/>
    <UserInput Input={userInput} onChange={changeHandler}/>
    {!InputisValid && <p className="center">Please enter a duration greater than 0</p>}
    {InputisValid && <Results Input={userInput} />}
    </div>
  )
}

export default App
