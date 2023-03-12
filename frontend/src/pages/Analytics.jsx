import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LineGraph from "../components/LineGraph";
import { CssBaseline } from "@mui/material";

function Analytics() {
	return (
		<div>
			<CssBaseline />
			<Navbar />
			<LineGraph />
			<Footer />
		</div>
	);
}

export default Analytics;
