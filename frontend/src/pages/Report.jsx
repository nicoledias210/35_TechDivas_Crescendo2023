import React from "react";
import Piechart from "../components/Piechart";
import ImageUpload from "../components/ImageUpload/ImageUpload";

import { Box } from "@mui/system";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function Report() {
	return (
		<Box>
			<CssBaseline />
			<Navbar />
			<ImageUpload />
			{/* <Piechart /> */}
			<Footer />
		</Box>
	);
}

export default Report;
