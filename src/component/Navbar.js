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
// goodluck on remebering this.
// look up api pictures for cars or anime
// Look up card designs in the odin project
export default Nav;
