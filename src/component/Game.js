import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState, useEffect } from "react";
const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [collecter, setCollecter] = useState("")
  const [level, setLevel] = useState(4);
  const [gameSwitch, setGameSwitch] = useState(false)
  var gameCase = []
  gameCase = clicked.filter((currentValue, currentIndex) =>
    clicked.indexOf(currentValue) !== currentIndex)


  const nextLevel = () => {
    setLevel(level + 2)
  }
  if (clicked.length >= level) {
    nextLevel()
  }
  useEffect(() => {
    const reset = () => {
      if (level === 4 && currentScore <= 4) {
        setCurrentScore(0)
        setClicked([])
      }
      if (level > 4 && currentScore > 4) {
        setCurrentScore(0)
        setClicked([])
      }
    }
    reset()
    console.log(gameCase)
    console.log(clicked)
  }, [gameCase.length > 0])
  return (
    <>
      <Nav currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} />
      <CardHolder setCurrentScore={setCurrentScore} setBestScore={setBestScore} setClicked={setClicked} level={level} gameSwitch={gameSwitch} setGameSwitch={setGameSwitch} gameCase={gameCase} />
    </>
  )
}
// use useEffect and watch for clicked
export default Game;
