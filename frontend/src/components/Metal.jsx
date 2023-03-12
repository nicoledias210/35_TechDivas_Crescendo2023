import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Metal() {
	document.body.style = "background: #daffd6;";
	return (
		<div>
			<CssBaseline />
			<div style={{ margin: "60px", marginTop: "120px" }}>
				<Navbar />
				<h1 style={{ fontSize: 35 }}>METAL</h1>
				<br></br>
				<div
					className="Metal"
					style={{
						textAlign: "left",
						fontFamily: "Poppins",
						fontSize: 20,
					}}
				>
					<p>
						Here are five things your business should keep in mind
						when recycling glass.
					</p>
					<ol>
						<h3>
							<li>Don’t break it</li>
						</h3>
						<p>
							Broken glass can be recycled, but it might not be
							recycled to its previous state. In other words, if
							you recycle a broken bottle, the resulting glass
							will likely not be made into a new glass bottle.
							That glass could still be used as an additive in
							fibreglass or tile, but it’s best to maintain the
							integrity of the recycled glass as much as possible.
							It’s also safer for your handler if he or she can
							avoid handling broken glass.
						</p>
						<h3>
							<li>Keep them separated</li>
						</h3>
						<p>
							Non-container glass, which is glass used for
							windows, mirrors, etc., is typically treated with
							chemicals and therefore has a different melting
							point than, say, a glass bottle. Thus, you should
							typically not combine non-container glass with
							container glass when recycling.
						</p>
						<h3>
							<li>Colour matters–sometimes</li>
						</h3>
						<p>
							Some recycling haulers require that you separate
							glass by colour; others do not. If yours does not,
							this is called single-stream recycling, meaning that
							all glass products can be combined into one bin, and
							the material will be separated later. Not all
							recyclers, however, offer single-stream recycling.
							Why does colour matter? Because glass can be
							recycled over and over, it’s important to maintain
							its original colour as much as possible. Mixing two
							different colours of glass will result in a
							different, and possibly unwanted, colour of
							glass–just as mixing two different colours of paint
							will result in a different, and possibly unwanted,
							colour of paint.
						</p>
						<h3>
							<li>Keep it clean</li>
						</h3>
						<p>
							Many recyclers ask that you clean your glass before
							recycling it. If the glass has residue–such as
							sugar, for example–it becomes sticky and can attract
							bugs. The same holds true for other glass containers
							used for food and beverages. Glass is typically
							cleaned during the recycling process, but upfront
							cleaning on your end makes for a more seamless
							recycling experience.
						</p>
						<h3>
							<li>Be patient</li>
						</h3>
						<p>
							Glass weighs more than other waste items (like
							aluminium) and isn’t as flexible as other waste
							items (like cardboard). This can make storing and
							recycling classes more cumbersome and, potentially,
							more costly. Still, recycling glass is a worthwhile
							endeavour, as it saves energy and reduces the
							consumption of raw materials.
						</p>
					</ol>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Metal;
