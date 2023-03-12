import React from "react";
import Piechart from "../components/Piechart";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { Box } from "@mui/system";

function Report() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#048a52",
			},
			white: {
				main: "#ffffff",
			},
		},
		typography: {
			fontFamily: "Poppins",
		},
	});

	return (
		<Box>
			<Navbar></Navbar>
			<ImageUpload />
			{/* <Piechart /> */}
			<Footer></Footer>
		</Box>
	);
}

export default Report;
