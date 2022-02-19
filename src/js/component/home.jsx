import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [glowColor, setGlowColor] = useState("red");
	return (
		<div className="parent">
			<div className="topTraffic"></div>
			<div className="trafficBody">
				<div
					onClick={() => setGlowColor("red")}
					className={
						"light red" + (glowColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setGlowColor("yellow")}
					className={
						"light yellow " +
						(glowColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setGlowColor("green")}
					className={
						"light green " + (glowColor === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
