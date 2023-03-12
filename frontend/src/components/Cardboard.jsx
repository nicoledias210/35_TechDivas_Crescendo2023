import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Cardboard() {
	document.body.style = "background: #daffd6;";
	return (
		<div>
			<CssBaseline />
			<div style={{ margin: "60px", marginTop: "120px" }}>
				<Navbar />
				<h1 style={{ fontSize: 35 }}>CARDBOARD</h1>
				<br></br>
				<div
					className="Cardboard"
					style={{
						textAlign: "left",
						fontFamily: "Poppins",
						fontSize: 20,
					}}
				>
					<p>
						Here are 10 tips for recycling cardboard in the most
						efficient way possible.
					</p>

					<ol>
						<h3>
							<li>Keep it dry</li>
						</h3>
						<p>
							Once cardboard gets wet or saturated, it becomes
							extremely difficult–if not altogether impossible –
							to recycle, so try to keep it as dry as possible.
						</p>

						<h3>
							<li>Break it down</li>
						</h3>
						<p>
							Flatten cardboard boxes as much as you can. This
							will conserve space in recycling containers and make
							them easier to transport. On the flip side, failing
							to break down boxes can present complications for
							the actual cardboard-recycling machinery.
						</p>

						<h3>
							<li>Remove plastic and other contaminants</li>
						</h3>
						<p>
							Be sure to remove plastic, polystyrene, and other
							contaminants from your cardboard before recycling.
							While you’re certainly welcome to remove any tape or
							labels that may appear on your cardboard, they can
							be removed quite easily at recycling facilities.
						</p>

						<h3>
							<li>Establish a system</li>
						</h3>
						<p>
							Have a system in place to collect cardboard quickly
							and efficiently before it becomes trash.
						</p>

						<h3>
							<li>Store responsibly</li>
						</h3>
						<p>
							Once collected, place all cardboard waste in a
							closed-topped recycling bin, and store these bins in
							a clean, dry place.
						</p>

						<h3>
							<li>Store strategically</li>
						</h3>
						<p>
							Any cardboard that contains grease or other
							contaminants cannot be recycled, so the next time
							your boss buys pizza for the staff, avoid combining
							those greasy boxes with dry, non-contaminated
							cardboard.
						</p>

						<h3>
							<li>It’s not just grease, either</li>
						</h3>
						<p>
							Food is one of the worst contaminants in the
							cardboard-recycling process, especially when that
							food involves oil. Why? Because when cardboard is
							recycled, it is mixed with water–and as we all
							learned in science class, oil and water don’t mix.
						</p>

						<h3>
							<li>Use a cardboard baler</li>
						</h3>
						<p>
							A baler is cost-effective way to compact large
							quantities of cardboard and can be cheaper and more
							environmentally friendly than a traditional
							dumpster.
						</p>

						<h3>
							<li>Use it as transport</li>
						</h3>
						<p>
							If you have other recyclables–newspapers, glass,
							plastic, etc.–use cardboard boxes to transport them
							to the nearest drop-off center. Then you can recycle
							the boxes–assuming you keep them dry and flatten
							them, that is.
						</p>

						<h3>
							<li>Take it outside</li>
						</h3>
						<p>
							Not all of your cardboard has to be recycled in the
							traditional sense. In fact, cardboard can serve in a
							variety of gardening and compost capacities. Talk to
							those responsible for your office landscaping and
							offer them excess cardboard to use as mulch, or
							simply donate it to a compost facility.
						</p>
					</ol>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Cardboard;
