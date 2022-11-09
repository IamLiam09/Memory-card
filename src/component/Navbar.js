import Themeback from "./Darkmode";
import logo from "./mainLogo.png"
const Nav = (props) => {
  const { currentScore, bestScore, setBestScore } = props
  if(currentScore > bestScore){
    setBestScore(currentScore)
  }
  return (
    <nav>
      <div className="holder">
        <img src={logo} className="logo" />
      </div>
      <div className="intl">
        <div className="intl--switchholder">
          <p>Light</p>
          <Themeback />
          <p>Dark</p>
        </div>
        <div>
          {currentScore === 0 ? <p className="__text">current score:</p>:
          <p className="__text">current score: {currentScore}</p>}
          {bestScore === 0 ? <p className="__text">best score:</p>:
          <p className="__text">best score: {bestScore}</p>}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
