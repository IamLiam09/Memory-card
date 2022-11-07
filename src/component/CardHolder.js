import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
const CardHolder = () => {
	const clientId = "oMYNcsWDKd5NtIpyMw0eaWb29b0kdlxAZsHdipLbX38";
	const [result, setResult] = useState([]);
	const [level, setLevel] = useState(4);
	const url = `https://api.unsplash.com/search/photos?page=1&query=mclaren&client_id=${clientId}`;
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setResult(response.data.results.slice(0, level));
			})
			.catch((err) => {
				console.log(err);
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
		return array;
	}
	
	const touchcard = document.querySelectorAll(".card");
	const fired =() => {
		Array.from(touchcard).forEach((element) => {
			element.addEventListener("click", () => {
				console.log(element);
				shuffleCards(result);
				setResult(result);
			});
	
		});
	}
	Array.from(touchcard).forEach((element) => {
		element.addEventListener("click", () => {
			console.log(element);
			shuffleCards(result);
			setResult(result);
		});

	});
	Array.from(touchcard).forEach((element) => {
		element.addEventListener("click", () => {
			console.log(element);
			shuffleCards(result);
			setResult(result);
		});

	});

	return (
		<main className="cardHolder">
			<Card result={result} />
		</main>
	);
};
// create the card animation when clicked
// Learn how to populate the display from 4 to 8
// Implement the unsplash api
export default CardHolder;
