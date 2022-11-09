import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState } from "react";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
      <Nav currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} />
      <CardHolder setCurrentScore={setCurrentScore} setBestScore={setBestScore} />
    </>
  )
}
export default Game
