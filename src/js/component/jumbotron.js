import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4 text-left">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead text-left">
				<a className="btn btn-primary btn-lg " href="" role="button">
					Reload!
				</a>
			</p>
		</div>
	);
}
