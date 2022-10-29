import lambo from "./pic.jpg";
import aud1 from "./theone.wav"
const card = () => {
	const audio = new Audio()
	audio.src = aud1
	const clicked = () => {
		audio.play()
	}
	return (
		<div className="card">
			<img src={lambo} alt="lambo" onClick={clicked}/>
			
		</div>
	);
};
export default card;
