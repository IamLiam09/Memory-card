import { Switch } from "antd";
import { createContext, useContext, useState, useLayoutEffect } from "react";
const ThemeContext = createContext();
const ThemeProvider = ({ childern }) => {
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{childern}
		</ThemeContext.Provider>
	);
};
const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
const initialTheme = () => localStorage.getItem("Memory card");
const [theme, setTheme] = useState(initialTheme);
const toggleTheme = () => {
	setTheme((theme) => (theme === "light" ? "dark" : "light"));
};
useLayoutEffect(() => {
	localStorage.setItem("Memory card", theme);
	if (theme === "light") {
		document.documentElement.classList.remove("dark-mode");
		document.documentElement.classList.add("light-mode");
	} else {
		document.documentElement.classList.remove("light-mode");
		document.documentElement.classList.add("dark-mode");
	}
}, [theme]);
const Nav = () => {
	// const [background, setBackground] = useState(false);
	// const toggleBackground = () => {
	// 	setBackground((background) => !background);
	// 	console.log(background);
	// };
	return (
		<nav>
			<div className="intl">
				<div className="intl--switchholder">
					<p>Light</p>
					<Switch onClick={toggleTheme} className="switch" />
					<p>Dark</p>
				</div>
				<div>
					<h6>current score:</h6>
					<h6>best score:</h6>
				</div>
			</div>
		</nav>
	);
};
// add a toggle button from light to dark
// goodluck on remebering this.
// look up api pictures for cars or anime
// Look up card designs in the odin project
export { Nav, ThemeProvider, useTheme };
