import React, {useState} from "react";
import Semaforo from "./Semaforo";
import Autobotton from "./Autobutton";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")

	return (
		<>
			<div className="d-flex flex-column align-items-center">
				<Semaforo color={color} setColor={setColor} />
				<Autobotton color={color} setColor={setColor} />
			</div>
		</>
	);
};

export default Home;