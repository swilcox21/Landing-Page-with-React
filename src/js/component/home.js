import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container text-center">
			<Navbar />
			<Jumbotron />
			<div className="container text-center d-flex justify-content-between">
				<Card
					text="this is a rondomly generated picture of a girl"
					image="https://loremflickr.com/320/240/girl"
					buttonLabel="go here"
					title="girl"
				/>
				<Card
					text="this is a rondomly generated picture of a dog"
					image="https://loremflickr.com/320/240/dog"
					buttonLabel="go there"
					title="dog"
				/>
				<Card
					text="this is a rondomly generated picture of a cat"
					image="https://loremflickr.com/320/240/"
					buttonLabel="go where?"
					title="cat"
				/>
				<Card
					text="this is a rondomly generated picture of a house"
					image="https://loremflickr.com/320/240/house"
					buttonLabel="go anywhere"
					title="house"
				/>
			</div>
			<div className="container text-center">
				<Footer />
			</div>
		</div>
	);
}
