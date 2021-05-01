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
		setTablero(tableroAux);
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
					{/* <button
						onClick={() => setArmaActual("X")}
						className="btn btn-outline-dark bg-light">
						Set X
					</button>
					<button
						onClick={() => setArmaActual("O")}
						className="btn btn-outline-dark bg-light">
						Set O
					</button> */}
				</div>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div
						onClick={() => {
							props.cambiarArma;
							jugada(0);
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[0]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(1), props.cambiarArma;
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[1]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(2), props.cambiarArma;
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
							jugada(3), props.cambiarArma;
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[3]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(4), props.cambiarArma;
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[4]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(5), props.cambiarArma;
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
							jugada(6), props.cambiarArma;
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[6]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(7), props.cambiarArma;
						}}
						className="styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{tablero[7]}
						</p>
					</div>
					<div
						onClick={() => {
							jugada(8), props.cambiarArma;
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
	cambiarArma: PropTypes.func
};

//<div></div>
export default Game;
