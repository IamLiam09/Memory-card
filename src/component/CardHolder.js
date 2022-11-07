import Card from "./Card";
import axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";
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
  useEffect(() => {
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
    Array.from(touchcard).forEach((element) => {
      element.addEventListener("click", () => {
        element.classList.add("clicked")
        console.log(element);
        shuffleCards(result);
        setResult(result)
        console.log(result)
      });
      return () => touchcard.removeEventListener("click", () => {
        console.log(element);
        // setResult(result);
      });
    })
  }, [result])




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
