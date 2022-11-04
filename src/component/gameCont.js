import CardHolder from "./CardHolder";
import { usetState, useEffect } from "react"
const GameCont = (props) => {
    // const { restartedGame, toggleRestartedGame } = props;
    // const [level, setLevel] = useState(1);
    // const [cards, setCards] = useState(4);
    // const [cardsPicked, setCardsPicked] = useState();
    // const [carArray, setCarArray] = useState([]);
    // const [activecar, setActiveCar] = useState([]);
    // useEffect(() => {
    //     if (restartedGame === true) {
    //         setLevel(1);
    //         setCards(4);
    //         setCardsPicked();
    //         setPokemonArray([])
    //         toggleRestartedGame(false)
    //         newCards()
    //     }
    // }, [restartedGame])
    // const calculateRequiredCards = (level) => {
    //     switch(level){
    //         case 1: 
    //             setCards(4)
    //             break;
    //         case 2: 
    //             setCards(6)
    //             break;
    //         case 3: 
    //             setCards(8)
    //             break;
    //         case 4:
    //             setCards(10)
    //             break;
    //         case 5:
    //             setCards(12)
    //             break;
    //         default:
    //             setCards(12)
    //     }
    // }
    // const generateLamboArray = (cards) => {
    //     const generatedLamboArr = []
    //     for (let i = 0; i < cards; i++){
    //         let newValue = Math.floor(Math.random() * (150 - 0) + 0)
    //         while(generatedLamboArr.includes(newValue)) {
    //             newValue = Math.floor(Math.random() * (150 - 0) + 0)
    //         }
    //         generatedLamboArr.push(newValue)}
    //     }
    //     setCarArray(
    //         generateLamboArray
    //     )
    // }
    return(
        <CardHolder />
    )
}
export default GameCont;