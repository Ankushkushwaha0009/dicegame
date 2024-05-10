import React, { useState } from "react";
import styled from "styled-components";

const NumberSelectors = ({setError , error , selectedNumbers , setSelectedNumber }) => {

  const array = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumbers);

  const numberSelectorhandle  = (num)  => {
    setSelectedNumber(num) ; 
    setError("") ; 
  }

  return (
    <NumberSelectorContainer>
      <p className="error"> {error} </p>
      <div className="flex">
        {array.map((num, index) => {
          return (
            <Box
              isselected={num === selectedNumbers}
              key={index}
              onClick={() => numberSelectorhandle(num)}
            >
              {num}
            </Box>
          );
        })}
      </div>
      <p> Select Numbers </p>
    </NumberSelectorContainer>
  );
};

export default NumberSelectors;

const NumberSelectorContainer = styled.div`

  display : flex  ; 
  flex-direction : column ; 
  align-items : end ; 

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }
  
  .error {
    color : red ; 
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
