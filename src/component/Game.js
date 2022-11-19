import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState } from "react";
// test
const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [collecter, setCollecter] = useState("")
  const [level, setLevel] = useState(4);
  const [gameSwitch, setGameSwitch] = useState(false)
  const gameCase = clicked.filter((currentValue, currentIndex) =>
    clicked.indexOf(currentValue) !== currentIndex)
  const reset = () => {
    if (level <= 4 && currentScore <= 4) {
      console.log(level)
      console.log("IN")
      console.log(gameCase)
    }
    if (level > 4 && currentScore > 4) {
      console.log("change score")
      console.log(gameSwitch)
    }
  }
  const nextLevel = () => {
    setLevel(level + 2)
  }
  if (gameCase.length > 0) {
    reset()
    console.log(gameCase)
  }
  if (clicked.length >= level) {
    nextLevel()
  }
  return (
    <>
      <Nav currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} />
      <CardHolder setCurrentScore={setCurrentScore} setBestScore={setBestScore} setClicked={setClicked} level={level} gameSwitch={gameSwitch} setGameSwitch={setGameSwitch} />
    </>
  )
}
export default Game;
