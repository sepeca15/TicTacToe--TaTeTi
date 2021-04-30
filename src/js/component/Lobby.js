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
					<div>
						<p className="d-flex justify-content-center align-middle textW b">
							CHOOSE YOUR WEAPON
						</p>
						<div>
							<input></input>
							<input></input>
						</div>
						<div className="d-flex justify-content-center align-middle">
							<button
								className="styleCasillero m-2"
								onClick={props.startGame}>
								X
							</button>
							<button
								className="styleCasillero m-2"
								onClick={props.startGame}>
								O
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Lobby.propTypes = {
	startGame: PropTypes.func
};

export default Lobby;
