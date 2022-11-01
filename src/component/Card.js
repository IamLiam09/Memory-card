import lambo from "./pic.jpg";
import aud1 from "./theone.wav";
import { createApi } from "unsplash-js";
import { useState } from "react";
import axios from "axios";
const card = () => {
	// The audio played when clicked
	const audio = new Audio();
	audio.src = aud1;
	const docCard = document.querySelector(".card");
	// api production
	const clientId = "oMYNcsWDKd5NtIpyMw0eaWb29b0kdlxAZsHdipLbX38";
	const [result, setResult] = useState([]);
	const url =
		"https://api.unsplash.com/search/photos?page=1&query=lambo&client_id=" +
		clientId;

	// The function that plays when the card is clicked
	const clicked = () => {
		audio.play();
		axios.get(url).then((response) => {
			setResult(response.data.results);
		});
	};
	return (
		<div className="card">
			<img src={lambo} alt="lambo" onClick={clicked} className="photo img" />
			{result.map((image) => (
				<>
					<img src={image.urls.small} />

				</>
			))}
		</div>
	);
};
export default card;
