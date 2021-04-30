import React, { Fragment, useState } from "react";

const Game = () => {
	const [turnoActual, setTurnoActual] = useState("");
	const [casilla1, setCasilla1] = useState("");
	const [casilla2, setCasilla2] = useState("");
	const [casilla3, setCasilla3] = useState("");
	const [casilla4, setCasilla4] = useState("");
	const [casilla5, setCasilla5] = useState("");
	const [casilla6, setCasilla6] = useState("");
	const [casilla7, setCasilla7] = useState("");
	const [casilla8, setCasilla8] = useState("");
	const [casilla9, setCasilla9] = useState("");
	let arrCasillas = [];
	return (
		<div>
			<div className="container mb-2">
				<h1 className="d-flex justify-content-center p-3 pt-5 textW b">
					Tic Tac Toe in React.js
				</h1>
				<h2 className="d-flex justify-content-center my-3 textW b">
					It is {turnoActual} turno!
				</h2>
				<div className="d-flex justify-content-center my-3 ">
					<button className="btn btn-outline-dark bg-light">
						Start Over
					</button>
					<button
						onClick={() => setTurnoActual("X")}
						className="btn btn-outline-dark bg-light">
						Set X
					</button>
					<button
						onClick={() => setTurnoActual("O")}
						className="btn btn-outline-dark bg-light">
						Set O
					</button>
				</div>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div
						onClick={() =>
							casilla1 == "" ? setCasilla1(turnoActual) : casilla1
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla1}
						</p>
					</div>
					<div
						onClick={() =>
							casilla2 == "" ? setCasilla2(turnoActual) : casilla2
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla2}
						</p>
					</div>
					<div
						onClick={() =>
							casilla3 == "" ? setCasilla3(turnoActual) : casilla3
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla3}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() =>
							casilla4 == "" ? setCasilla4(turnoActual) : casilla4
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla4}
						</p>
					</div>
					<div
						onClick={() =>
							casilla5 == "" ? setCasilla5(turnoActual) : casilla5
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla5}
						</p>
					</div>
					<div
						onClick={() =>
							casilla6 == "" ? setCasilla6(turnoActual) : casilla6
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla6}
						</p>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div
						onClick={() =>
							casilla7 == "" ? setCasilla7(turnoActual) : casilla7
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla7}
						</p>
					</div>
					<div
						onClick={() =>
							casilla8 == "" ? setCasilla8(turnoActual) : casilla8
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla8}
						</p>
					</div>
					<div
						onClick={() =>
							casilla9 == "" ? setCasilla9(turnoActual) : casilla9
						}
						className="col-2 styleCasillero b border border-secondary">
						<p className="d-flex justify-content-center align-middle">
							{casilla9}
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
