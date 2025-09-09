import React from "react";
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Cards from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"

//include images into your bundle

//create your first component
const Home = () => {
	return (

		<>
		<Navbar />
		<Jumbotron />
		<Cards />
		<Footer />
		</>

		
	);
};

export default Home;