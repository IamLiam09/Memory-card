import lambo from "./pic.jpg";
import aud1 from "./theone.wav";
import { useState, useEffect } from "react";
import axios from "axios";
const Card = (props) => {
	const { company } = props
	// The audio played when clicked
	const audio = new Audio();
	audio.src = aud1;
	const docCard = document.querySelector(".card");
	// api production
	const clientId = "oMYNcsWDKd5NtIpyMw0eaWb29b0kdlxAZsHdipLbX38";
	const [result, setResult] = useState([]);
	const url =
		`https://api.unsplash.com/search/photos?page=1&query=mclaren&client_id=` +
		clientId;
	useEffect(() => {
		axios.get(url).then((response) => {
			setResult(response.data.results);
		}).catch(err => {
			console.log(err)
		})
	}, []);

	// The function that plays when the card is clicked
	const clicked = () => {
		audio.play();
	};
	return (
		<>
			{result.map((image, index) => (
				<>
					<div className="card" key={index}>
						<img
							src={image.urls.small}
							alt="lambo"
							onClick={clicked}
							className="photo img"
						/>
					</div>
				</>
			))}
		</>
	);
};
export default Card;
