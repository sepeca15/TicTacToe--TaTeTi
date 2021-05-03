import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Game = props => {
	const [tablero, setTablero] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);

	const jugada = posicion => {
		let tableroAux = [...tablero];
		tableroAux[posicion] = props.armaActual;
		let win = calculaGanador(tableroAux);
		setTablero(tableroAux);
		setGanador(win);
		anunciarGanador(win);
	};

	function calculaGanador(tablero) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				tablero[a] &&
				tablero[a] === tablero[b] &&
				tablero[a] === tablero[c]
			) {
				return tablero[a];
			}
		}
		return "";
	}
	const [ganador, setGanador] = useState("");

	const anunciarGanador = win => {
		if (win === "X") {
			alert(props.Player1 + " a ganado");
		} else if (win === "O") {
			alert(props.Player2 + " a ganado");
		}
	};

	return (
		<div>
			<div className="container mb-2">
				<h1 className="d-flex justify-content-center p-3 pt-5 textW b">
					Tic Tac Toe in React.js
				</h1>
				<h2 className="d-flex justify-content-center my-3 textW b">
					It is {props.armaActual} turno!
				</h2>
				<div className="d-flex justify-content-center my-3 ">
					<button
						onClick={props.startOver}
						className="btn btn-outline-dark bg-light">
						Start Over
					</button>
				</div>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[0] == "") {
									jugada(0);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[0]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[1] == "") {
									jugada(1);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[1]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[2] == "") {
									jugada(2);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[2]}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[3] == "") {
									jugada(3);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[3]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[4] == "") {
									jugada(4);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[4]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[5] == "") {
									jugada(5);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[5]}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[6] == "") {
									jugada(6);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[6]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[7] == "") {
									jugada(7);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[7]}
						</p>
					</div>
					<div
						onClick={() => {
							if (ganador === "") {
								if (tablero[8] == "") {
									jugada(8);

									props.cambiarArma();
								}
							}
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[8]}
						</p>
					</div>
				</div>
			</div>
			<div className="container p-5 mx-auto">
				<p className="d-flex justify-content-center align-middle">
					by Sebastian Perez
				</p>
			</div>
		</div>
	);
};

Game.propTypes = {
	startOver: PropTypes.func,
	armaActual: PropTypes.string,
	cambiarArma: PropTypes.func,
	Player1: PropTypes.string,
	Player2: PropTypes.string
};

//<div></div>
export default Game;
