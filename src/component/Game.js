import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState } from "react";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  console.log(currentScore)
  return (
    <>
      <Nav currentScore={currentScore} />
      <CardHolder setCurrentScore={setCurrentScore} />
    </>
  )
}
export default Game
