import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

const App = () => {

  const [isGameStarted , SetIsGameStarted] = useState(true) ; 

  const toggleGamePlay = () => {
    SetIsGameStarted(prevVal => !prevVal) ; 
  }

  return (
    <>
        {
            isGameStarted ?  <GamePlay />  : <StartGame  toggle = {toggleGamePlay}/>
        }
    </>
  )
}

export default App ; 
