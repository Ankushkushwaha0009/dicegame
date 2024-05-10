import React from "react";
import TotalScore from "./TotalScore";
import NumberSelectors from "./NumberSelectors";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumbers, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("") ; 
  const [rulesClicked , setRulesClicked]  = useState(false) ; 

  const generateRandomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    if(!selectedNumbers) {
        setError("You have not selected any number") ; 
        return ; 
    }  
    setError("") ; 
    const randomNumber = generateRandomNumbers(1, 6);
    setCurrentDice(prev => randomNumber);
    if (selectedNumbers == randomNumber) {
      setScore((prev) => prev + randomNumber);
    }else{
        setScore(prev => prev - 2) ; 
    }
    setSelectedNumber(undefined) ;
  };

  const resetScore = () => {
      setScore(0) ; 
  }

  return (
    <MainContainer>
      <div className="top-sections">
        <TotalScore score={score} />
        <NumberSelectors error={error}
          selectedNumbers={selectedNumbers}
          setSelectedNumber={setSelectedNumber}
          setError  = {setError}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div>
         <div className="btn">
             <OutlineButton onClick={() => resetScore()}> Reset </OutlineButton>
             <Button onClick={() => setRulesClicked(prev => !prev)}> Show Rules </Button>
             {rulesClicked  ? <Rules /> : ""}
         </div>
      </div>
    </MainContainer>
  );

};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .top-sections {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    margin-top  : 40px  ; 
     display  : flex ; 
     flex-direction  : column ; 
     justify-content : center ; 
    align-items : center ; 
    gap : 10px  ; 
  }
`;
