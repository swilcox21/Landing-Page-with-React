import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string,
	buttonLabel: PropTypes.string,
	title: PropTypes.string
};
