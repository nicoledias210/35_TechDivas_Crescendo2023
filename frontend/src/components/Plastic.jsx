import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Plastic() {
	document.body.style = "background: #daffd6;";
	return (
		<div>
			<CssBaseline />
			<div style={{ margin: "60px", marginTop: "120px" }}>
				<Navbar />
				<h1 style={{ fontSize: 35 }}>PLASTIC</h1>
				<br></br>
				<div
					className="Plastic"
					style={{
						textAlign: "left",
						fontFamily: "Poppins",
						fontSize: 20,
					}}
				>
					<p>
						Plastic wastes are rapidly produced and exposed at a
						high rate due to the world's industrial development and
						population growth. The following methods are established
						to have a clean environment and good plastic waste
						disposal.
					</p>
					<ol>
						<h3>
							<li>Recycling</li>
						</h3>
						<p>
							Recycling is also known as “renewing or reusing” to
							prevent the harmful effect on society and
							environmental protection. The plastics are
							non-biodegradable as carbon-based products and other
							polymers. It contains bottles and other materials
							that can be melted and transformed into other
							products like plastic tables and chairs. This
							process is performed in the following six steps:
							collecting waste plastics, sorting, or arranging
							plastics into categories, washing to remove
							impurities, shredding and resizing, identifying and
							separating plastics, and compounding. There are
							several benefits of plastic waste recycling that the
							world can gain when plastic are reused rather than
							disposing of them in non-desirable places, one of
							the advantages is the protection of human life by
							decreasing carbon dioxide and other harmful gases in
							the atmosphere, which can occur during incineration
							or combustion of the wastes. Recycling reduces
							pollution across the ecosystem, requires less
							energy, and helps in natural conservation. It saves
							fast-depleting landfill space and eases the demand
							for fossil fuel consumption. Moreover, it promotes a
							sustainable lifestyle and contributes to the
							national economy.e
						</p>
						<h3>
							<li>Incineration</li>
						</h3>
						<p>
							The waste incineration method refers to the burning
							of wastes in oxygen, which is chemically known as
							complete combustion that releases water molecules
							and carbon dioxide into the atmosphere. To select
							plastics to be incinerated, we must be careful on
							non-combustible waste to avoid these unprepared
							explosive accidents. The combustion of organic
							molecules can also produce energy which is known as
							fuel. This method of incineration has several
							positive impacts on society rather than energy
							production. It also has huge contributions in
							minimising waste and producing electricity from the
							waste, which is highly needed in modern
							industrialization . Waste incineration has played a
							critical part in producing renewable energy from
							biomass resources. There are several benefits of
							plastic waste management through incineration. These
							include decreased quantity of waste in the
							ecosystem, produces heat and power needed in
							different activities, reduces pollution of the
							atmosphere, saves economy on transport fee of the
							waste, and emilites harmful germs and chemicals.
							Moreover, it can be applied in any season or weather
							and prevents the production of methane gas.
						</p>
						<h3>
							<li>Landfills</li>
						</h3>
						<p>
							Plastics disposal post-utilization in different
							dustbins ends-up in landfill. Landfills refer to all
							places and areas where we reject all disposable
							plastic waste after utilisation before being buried
							under the earth's face. The objectives of landfill
							arrangement are to provide a safer area of plastic
							waste disposal to protect all dimensions of the
							environment, i.e., aquatics and airspace, to achieve
							the objectives mentioned above. It demands a lot of
							work be done in the community, like digging a long
							hole or dumping in high depths and putting waste
							into it and letting it decompose. During this
							landfill's processing, each organic molecule passes
							through biodegradation and decomposition. Plastic
							bags and other long polymer wastes can take around
							ten to a hundred years to degrade in landfills
							processing . Different plastic wastes can take a
							long time of degradation due to their specific
							biochemical properties and environmental or climate
							conditions like sunlight, wind, and climate change
							without these main driving factors. Landfills are an
							excellent energy source due to the carbon dioxide
							and methane gas produced during the biodegradation
							process. It keeps cities clean, hygiene maintenance
							and segregates hazardous waste from other types of
							wastes. Moreover, this is a cost-effective method of
							plastic waste management.
						</p>
						<h3>
							<li>Pyrolysis</li>
						</h3>
						<p>
							Pyrolysis refers to the process of converting gases
							and fatty oils to recover crude petrochemicals and
							obtain hydrocarbons. It is even used to recover
							crude petrochemicals and generate renewable energy
							from plastic wastes. Pyrolysis process is classified
							into three main categories according to the amount
							of heat energy needed to destroy plastic
							connections. There is high temperature, medium
							temperature, and low temperature-based media. Medium
							and high temperatures are based on the range of
							temperatures used to destroy the plastic structure.
							The corresponding temperatures defining the
							pyrolysis states are in the following ranges ≤600
							°C, 600–800 °C, and higher than 800 °C,
							respectively. The products resulting from the
							pyrolysis of plastics, depending on different
							factors like reactor type, residence time, plastics,
							condensation arrangement, feeding arrangement, and
							the temperature applied. The crude oil derivative
							plastics are modified to its monomers and other
							useful components, e.g. additives and plasters
							classified into the first derivative of petroleum
							refining cuts and petrochemicals through catalytic
							means of chemical treatment or thermal effects.
							These chemical treatment principles were initiated
							for good management and proper accumulation of
							plastic wastes in the waste management industry.{" "}
						</p>
						<h3>
							<li>Bioremediation</li>
						</h3>
						<p>
							It refers to the process where microorganisms
							decompose wastes. Bioremediation can also be defined
							as the branch of biotechnology that has main
							principles towards detoxification and
							decontamination by using microorganisms to
							biodegrade all-natural compounds that can be treated
							under biodegradation of plants, algae, fungi, and
							bacteria. It needs different conditions for culture
							medium like nutrients, enzymes, pressure, and
							temperature, which all need to be settled at an
							optimum level to facilitate the growth of
							microorganisms. Plastic polymers can be separated
							and biodegraded when it is subjected to heteroatomic
							molecules, e.g., nitrogen or oxygen and the presence
							of a carbon = carbon double bond. This facilitates
							the beginning of biodegradation of the waste; also,
							extracellular enzymes are applied for plastic
							polymer fragmentation. In the bioremediation
							process, enzymes as a chemical catalyst work by
							reducing the activation energy and converting
							substrate into the product. The enzymes are most
							likely to be used in the process, including
							microbial oxidoreductase, microbial oxygenase,
							laccases, peroxidases, microbial lignin peroxidases,
							hydrolases, and microbial manganese peroxidases,
							microbial lipases. Plastics like polyvinyl chloride
							under natural degradation result in monomers of
							phthalates like vinyl monomers, dioxins, and CFCs.
							Solid waste management depends on landfills and
							incineration.
						</p>
					</ol>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Plastic;
