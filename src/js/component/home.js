import React, { useState } from "react";
import Game from "./Game";
import Lobby from "./Lobby";

//create your first component
export function Home() {
	const [listoParaJugar, setListoParaJugar] = useState(false);
	const startGame = () => {
		setListoParaJugar(true);
	};
	return (
		<div className="bg-principal">
			{listoParaJugar ? <Game /> : <Lobby startGame={startGame} />}
		</div>
	);
}
