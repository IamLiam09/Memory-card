import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
const CardHolder = () => {
	const clientId = "oMYNcsWDKd5NtIpyMw0eaWb29b0kdlxAZsHdipLbX38";
	const [result, setResult] = useState([]);
	const url = `https://api.unsplash.com/search/photos?page=1&query=mclaren&client_id=${clientId}`;
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setResult(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		const touchcard = document.querySelectorAll(".card");
		Array.from(touchcard).forEach((element) => {
			element.addEventListener("click", () => {
				console.log(element);
				// shuffleCards(result);
				// console.log(result)
			});
		});
	}, []);
	function shuffleCards(array) {
		var i = 0,
			j = 0,
			temp = null;
		for (i = array.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1));
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		setResult(array);
	}
	return (
		<main className="cardHolder">
			<Card result={result.slice(0, 4)} />
		</main>
	);
};
// create the card animation when clicked
// Learn how to populate the display from 4 to 8
// Implement the unsplash api
export default CardHolder;
