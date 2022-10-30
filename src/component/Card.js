import lambo from "./pic.jpg";
import aud1 from "./theone.wav"
const card = () => {
	// The audio played when clicked
	const audio = new Audio()
	audio.src = aud1
	const docCard = document.querySelector(".card")
	// The function that plays when the card is clicked
	const clicked = () => {
		audio.play()
	}
	return (
		<div className="card">
			<img src={lambo} alt="lambo" onClick={clicked} className="photo img"/>
		</div>
	);
};
export default card;
