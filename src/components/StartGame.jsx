import React from "react";
import styled from "styled-components";
import dice_img from "../../public/images/dices.png";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  // console.log(toggle)

  return (
    <Container>
      <img src={dice_img} />
      <div>
        <h1> Dice Game </h1>
        <Button onClick={() => toggle()}> Play Now </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
export default StartGame;
