import React, { Fragment, useState } from "react";

const Game = () => {
	const [armaActual, setArmaActual] = useState("");
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
	let arrCasillas = [];

	const cambiarArma = () => {
		if (armaActual === "X") {
			setArmaActual("O");
		} else if (armaActual === "O") {
			setArmaActual("X");
		}
	};

	const jugada = posicion => {
		let tableroAux = [...tablero];
		tableroAux[posicion] = armaActual;
		setTablero(tableroAux);
	};

	return (
		<div>
			<div className="container mb-2">
				<h1 className="d-flex justify-content-center p-3 pt-5 textW b">
					Tic Tac Toe in React.js
				</h1>
				<h2 className="d-flex justify-content-center my-3 textW b">
					It is {armaActual} turno!
				</h2>
				<div className="d-flex justify-content-center my-3 ">
					<button className="btn btn-outline-dark bg-light">
						Start Over
					</button>
					<button
						onClick={() => setArmaActual("X")}
						className="btn btn-outline-dark bg-light">
						Set X
					</button>
					<button
						onClick={() => setArmaActual("O")}
						className="btn btn-outline-dark bg-light">
						Set O
					</button>
				</div>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							jugada(0);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[0]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(1);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[1]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(2);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[2]}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							jugada(3);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[3]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(4);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[4]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(5);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[5]}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							jugada(6);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[6]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(7);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[7]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(8);
							cambiarArma();
						}}
						className="col-2 styleCasillero b border border-secondary">
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
//<div></div>
export default Game;
