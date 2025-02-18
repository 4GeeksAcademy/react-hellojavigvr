import React from "react";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";




//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar/>
				<Jumbotron/>
				<div className="row ">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards />
                    </div>
                </div>
				<Footer/>
			</div>
			</>
	);
};

			export default Home;