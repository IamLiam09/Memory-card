import aud1 from "./theone.wav";
import LazyLoad from 'react-lazy-load';
const Card = (props) => {
  const { result} = props;
  // The audio played when clicked
  const audio = new Audio();
  audio.src = aud1;
  // The function that plays when the card is clicked
  const clicked = (e) => {
    audio.play();
  };
  return (
    <>
      {result.map((image, index) => (
        <>
          <div className="card" key={index} id={image.id}>
            <LazyLoad height={230}
              effect="blur"
            >
              <img
                src={image.urls.small}
                alt={image.description}
                onClick={
                  clicked
                }
                className="photo img"
              />
            </LazyLoad>
          </div>
        </>
      ))}
    </>
  );
};
export default Card;
