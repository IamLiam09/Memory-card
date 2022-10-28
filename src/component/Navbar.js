import Themeback from "./Darkmode";
const Nav = () => {
	return (
		<nav>
			<div className="intl">
				<div className="intl--switchholder">
					<p>Light</p>
					<Themeback />
					<p>Dark</p>
				</div>
				<div>
					<p>current score:</p>
					<p>best score:</p>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
