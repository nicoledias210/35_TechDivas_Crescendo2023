import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Paper() {
	document.body.style = "background: #daffd6;";
	return (
		<div>
			<CssBaseline />
			<div style={{ margin: "60px", marginTop: "120px" }}>
				<Navbar />
				<h1 style={{ fontSize: 35 }}>PAPER</h1>
				<br></br>
				<div
					className="Paper"
					style={{
						textAlign: "left",
						fontFamily: "Poppins",
						fontSize: 20,
					}}
				>
					<p>
						A few innovative ways of how to reduce paper waste are
						as follows:
					</p>

					<ol>
						<h3>
							<li>Think before you print</li>
						</h3>
						<p>
							If you are wondering how to reduce paper waste in
							the office, just printing less is an obvious choice.
							Using a printer to print out meeting agendas or
							presentations has become a habit for some of us. In
							your next meeting, try adding the agenda to your
							Outlook invitation or emailing attendees your
							presentation in advance. Having a soft copy allows
							them to add notes or comments and gives them
							something they can refer to later. All documents can
							be stored and shared in the cloud.
						</p>

						<h3>
							<li>Take paperless notes</li>
						</h3>
						<p>
							If you’re a note-taker, some great online
							alternatives are available that enable you to work
							without pen and paper, and it’s a simple way to
							reduce paper wastage. We like the simplicity of the
							functions of Evernote, the ability to use it across
							multiple devices, and how widely used it is.
							Collaborating on or sharing notes between teams is
							easy. If you’re looking for an app that feels more
							like a paper notebook, Microsoft Onenote is great.
							You can store your notes in ‘books’, colour code
							them and easily organise everything. Some of our
							colleagues swear by Google Keep. It’s great for use
							in meetings as it has the ability to create photo or
							voice notes. A pretty handy function, so you don’t
							have to type up your notes later. Apple users can
							take minutes using Apple Notes.
						</p>

						<h3>
							<li>Use online or cloud storage for your files</li>
						</h3>
						<p>
							Many businesses are adopting online file storage
							programs. We use Box and Google Drive. Google Drive
							is widely used, probably because you can store
							multiple formats, edit online using familiar
							formatting functions, and share documents or folders
							with your team or a single person. Plus, getting 15
							GB of storage for free is pretty good, too, as you
							can store multiple images and other content. Box has
							very similar functionality to other cloud-based
							storage products, but it allows us to have complete
							control of our data. For our company, data security
							is critical, so we ensure our internal platforms
							meet our high standards. It allows us to store
							documents securely while reducing paper waste.
						</p>

						<h3>
							<li>
								Hot-desking keeps our office free of cluster
							</li>
						</h3>
						<p>
							It can be a bit of an adjustment initially, but
							hot-desking is actually a great way to keep paper
							use to a minimum. It’s much harder to amass a
							collection of papers if you might be sitting in a
							different seat each day. So it’s a good idea to
							consider hot-desking if you want to give your team
							the motivation to reduce paper waste.
						</p>

						<h3>
							<li>
								Cultural support and encouragement to save paper
							</li>
						</h3>
						<p>
							It is vital to have an internal culture that
							reinforces the paperless message so that everyone is
							thinking about reducing paper waste to impact the
							environment positively. Instead of having a cupboard
							full of stationery, staff can make one-off requests
							when they need a specific item. To help improve
							awareness of sustainability efforts for all of
							customers, include an environmental impact
							calculator. This calculator is powered by the
							Environmental Paper Network, a nonprofit that
							promotes more sustainable paper consumption and
							production. It gives customers exact details of
							their work to save paper by estimating how much
							wood, water, waste, and carbon is saved with
							eSignature.
						</p>

						<h3>
							<li>Keep recycling bins handy</li>
						</h3>
						<p>
							Even if you’re a paperless office, there will always
							be paper products in need of proper disposal, and
							there are waste paper recycling bins accessible for
							this. To minimise recyclables being thrown into the
							garbage, don’t have personal bins. DocuSign
							eSignature enables you to access documents online
							and start the document signing process on virtually
							any internet-enabled device. It provides a healthy,
							sustainable, environmentally friendly alternative to
							paper that is cost-effective and
							productivity-enhancing.
						</p>
					</ol>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Paper;
