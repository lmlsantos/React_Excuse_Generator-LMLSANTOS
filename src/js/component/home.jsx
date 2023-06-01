import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//importing all the components
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Button from "./button.jsx";


//create your first component
const Home = () => {
	
	return (
		<>
		<Header />
		<div className="excuseContainer">								
			<Button title ="Excuse Generator"/>	
		</div>
		<div className="footerSection">
			<Footer/>
		</div>		
		</>
	);
};

export default Home;
