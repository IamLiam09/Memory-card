import lambo from "./pic.jpg";
import aud1 from "./theone.wav";
import { useState, useEffect } from "react";
const Card = (props) => {
	const { result } = props
	// The audio played when clicked
	const audio = new Audio();
	audio.src = aud1;
	const docCard = document.querySelector(".card");
	// api production

	// The function that plays when the card is clicked
	const clicked = () => {
		audio.play();
	};
	return (
		<>
			{result.map((image, index) => (
				<>
					<div className="card" key={index} id={index}>
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
