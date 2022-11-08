import Themeback from "./Darkmode";
import logo from "./mainLogo.png"
const Nav = (props) => {
  const {currentScore} = props
	return (
		<nav>
			<div className="holder">
				<img src={logo}  className="logo"/>
			</div>
			<div className="intl">
				<div className="intl--switchholder">
					<p>Light</p>
					<Themeback />
					<p>Dark</p>
				</div>
				<div>
					<p className="__text">current score: {{currentScore} === 0 ? "" : {currentScore}}</p>
					<p className="__text">best score: </p>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
