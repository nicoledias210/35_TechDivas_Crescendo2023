import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Report from "../../pages/Report";
import Auth from "../../pages/Auth";
import Analytics from "../../pages/Analytics";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		// const updateScrollPercentage = () => {
		// 	const windowHeight = window.innerHeight;
		// 	const documentHeight = document.documentElement.scrollHeight;
		// 	const scrollTop =
		// 		window.pageYOffset || document.documentElement.scrollTop;
		// 	const scrollDistance = documentHeight - windowHeight;
		// 	const scrollPercentage =
		// 		Math.min(scrollTop / scrollDistance, 1) * 100;

		// 	setScrollPercentage(scrollPercentage);
		// };

		// window.addEventListener("scroll", updateScrollPercentage);

		return () => {
			// window.removeEventListener("scroll", updateScrollPercentage);
		};
	}, []);

	const scroll = (id) => {
		var element = document.getElementById(id);
		var headerOffset = 96;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition =
			elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};

	function Logout() {
		if (localStorage.getItem("userid") != null) {
			localStorage.removeItem("userid");
			window.location.replace("http://127.0.0.1:5173/Login");
		}
	}

	return (
		<div
			className={styles.container}
			// style={{
			// 	background: scrollPercentage > 0 ? "white" : "none",
			// 	color: scrollPercentage > 0 ? "black" : "white",
			// 	boxShadow: scrollPercentage === 0 && "none",
			// }}
		>
			<Link
				to="/"
				style={{
					cursor: "default",
					color: "black",
					textDecoration: "none",
				}}
			>
				<h1
					// className={styles.logo}
					onClick={() => scroll("hero")}
					style={{
						color: "#048a52",
					}}
				>
					IRecycle
				</h1>
			</Link>
			<div className={styles.subContainer}>
				<p onClick={() => scroll("categories")}>Categories</p>
				<p onClick={() => scroll("teams")}>Our Team</p>
				<Link
					to="/Analytics"
					style={{
						cursor: "default",
						color: "black",
						textDecoration: "none",
					}}
				>
					<p>Analytics</p>
				</Link>
				<Link
					to="/Report"
					style={{
						cursor: "default",
						color: "black",
						textDecoration: "none",
					}}
				>
					<p>Report</p>
				</Link>

				{localStorage.getItem("userid") == null ? (
					<Link
						to="/Login"
						style={{
							cursor: "default",
							color: "black",
							textDecoration: "none",
						}}
					>
						<p>Login</p>
					</Link>
				) : (
					<p onClick={Logout}>Logout</p>
				)}
				{localStorage.getItem("userid") == null ? (
					<Link
						to="/Auth"
						style={{
							cursor: "default",
							color: "black",
							textDecoration: "none",
						}}
					>
						<p>Sign Up</p>
					</Link>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
