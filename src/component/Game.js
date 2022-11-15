import Nav from "./Navbar.js"
import CardHolder from "./CardHolder.js";
import { useState } from "react";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [checker, setChecker] = useState('')
  const [collecter, setCollecter] = useState("")
  console.log(clicked)
     const casee = clicked.filter((currentValue, currentIndex) => 
 clicked.indexOf(currentValue) !== currentIndex);
    if(casee.length > 0){
      console.log("game over")
    }
  return (
    <>
      <Nav currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} />
      <CardHolder setCurrentScore={setCurrentScore} setBestScore={setBestScore} setClicked={setClicked} setChecker={setChecker}/>
    </>
  )
}
export default Game;
