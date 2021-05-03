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

	const [Player1, setPlayer1] = useState("");

	const [Player2, setPlayer2] = useState("");

	const cambiarNombrePlayer1 = nombre => {
		setPlayer1(nombre);
	};

	const cambiarNombrePlayer2 = nombre => {
		setPlayer2(nombre);
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
					Player1={Player1}
					Player2={Player2}
				/>
			) : (
				<Lobby
					startGameInX={startGameInX}
					startGameInO={startGameInO}
					cambiarNombrePlayer1={cambiarNombrePlayer1}
					cambiarNombrePlayer2={cambiarNombrePlayer2}
				/>
			)}
		</div>
	);
}
