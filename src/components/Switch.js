import React, { useState } from "react";
import "./switch.css";

export default function Switch() {
	const [theme, setTheme] = useState("light");

	const handleChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<div className="container">
			<input
				className="input"
				type="checkbox"
				id="toggle"
				onChange={handleChange}
				checked={theme === "dark"}
			/>
			<label className="label" htmlFor="toggle" />
		</div>
	);
}
