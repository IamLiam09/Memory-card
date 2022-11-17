import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState } from "react";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [checker, setChecker] = useState('')
  const [collecter, setCollecter] = useState("")
  const [level, setLevel] = useState(4);
  const gameCase = clicked.filter((currentValue, currentIndex) =>
    clicked.indexOf(currentValue) !== currentIndex)
  const reset = () => {
    if (level != 4) {
      console.log(level)
      console.log("IN")
    }
    else{
      console.log("changescore")
    }
  }
  const nextLevel = () => {
    setLevel((level) => level + 2)
  }
  if (gameCase.length > 0) {
    reset()
  }
  if (clicked.length > level - 1) {
    nextLevel()
  }
  return (
    <>
      <Nav currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} />
      <CardHolder setCurrentScore={setCurrentScore} setBestScore={setBestScore} setClicked={setClicked} setChecker={setChecker} level={level} />
    </>
  )
}
export default Game;
