import React from "react";
import PropTypes from "prop-types";

const Lobby = props => {
	return (
		<div>
			<div className="container mb-2">
				<h1 className="d-flex justify-content-center p-3 pt-5 textW b">
					Tic Tac Toe in React.js
				</h1>
				<h2 className="d-flex justify-content-center my-3 textW b">
					Pick A Weapon
				</h2>
			</div>
			<div className="container mb-2">
				<div className="row d-flex justify-content-center">
					<div className="py-5">
						<p className="d-flex justify-content-center align-middle textW b">
							CHOOSE YOUR WEAPON
						</p>
						<div>
							<input
								onChange={event =>
									props.cambiarNombrePlayer1(
										event.target.value
									)
								}
								placeholder="Player 1"></input>
							<input
								onChange={event =>
									props.cambiarNombrePlayer2(
										event.target.value
									)
								}
								placeholder="Player 2"></input>
						</div>
						<div className="row d-flex justify-content-center">
							<div
								onClick={props.startGameInX}
								className="styleCasilleroLobby b border border-secondary m-3">
								<p className="d-flex justify-content-center align-middle">
									X
								</p>
							</div>
							<div
								onClick={props.startGameInO}
								className="styleCasilleroLobby b border border-secondary m-3">
								<p className="d-flex justify-content-center align-middle">
									O
								</p>
							</div>
						</div>
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
Lobby.propTypes = {
	startGameInX: PropTypes.func,
	startGameInO: PropTypes.func,
	cambiarNombrePlayer1: PropTypes.func,
	cambiarNombrePlayer2: PropTypes.func
};

export default Lobby;
