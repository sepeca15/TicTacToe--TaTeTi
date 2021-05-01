import React, { useState } from "react";
import Game from "./Game";
import Lobby from "./Lobby";

//create your first component
export function Home() {
	const [listoParaJugar, setListoParaJugar] = useState(false);
	const startGameInX = () => {
		setListoParaJugar(true);
		setArmaActual("X");
	};
	const startGameInO = () => {
		setListoParaJugar(true);
		setArmaActual("O");
	};

	const startOver = () => {
		setListoParaJugar(false);
	};

	const [armaActual, setArmaActual] = useState("");

	const cambiarArma = () => {
		if (armaActual === "X") {
			setArmaActual("O");
		} else if (armaActual === "O") {
			setArmaActual("X");
		}
	};

	return (
		<div className="bg-principal">
			{listoParaJugar ? (
				<Game
					startOver={startOver}
					armaActual={armaActual}
					cambiarArma={cambiarArma}
				/>
			) : (
				<Lobby
					startGameInX={startGameInX}
					startGameInO={startGameInO}
				/>
			)}
		</div>
	);
}
