import React, { useState } from "react";
import styled from "styled-components";
import dice1 from "../../public/images/dice/dice_1.png"; // Import your dice images
import dice2 from "../../public/images/dice/dice_2.png";
import dice3 from "../../public/images/dice/dice_3.png";
import dice4 from "../../public/images/dice/dice_4.png";
import dice5 from "../../public/images/dice/dice_5.png";
import dice6 from "../../public/images/dice/dice_6.png";

const RollDice = ({
    currentDice , 
    roleDice
}) => {
    
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={
            currentDice === 1
              ? dice1
              : currentDice === 2
              ? dice2
              : currentDice === 3
              ? dice3
              : currentDice === 4
              ? dice4
              : currentDice === 5
              ? dice5
              : dice6
          }
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
