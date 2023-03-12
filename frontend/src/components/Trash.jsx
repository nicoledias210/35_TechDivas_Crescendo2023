import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"


function Trash() {
    document.body.style = 'background: #daffd6;';
    return (
        <div >
            <Navbar/>
       <h1 style={{fontSize: 35}}>TRASH</h1><br></br>
        <div className="Trash" style={{ textAlign: "left", fontFamily: "Poppins", fontSize: 20 }} >
            <p>Garbage accumulation has never been much of a concern in the past, but due to globalization and industrialization, there is a need for a more efficient waste disposal method. Following are some of the methods that are used today.</p>
            
            <ol><h3><li>Landfill</li></h3>
                <p>In this process, the waste that cannot be reused or recycled are separated out and spread as a thin layer in low-lying areas across a city. A layer of soil is added after each layer of garbage. However, once this process is complete, the area is declared unfit for construction of buildings for the next 20 years. Instead, it can only be used as a playground or a park.</p>
                
                <h3><li>Incineration</li></h3>
                <p>Incineration is the process of controlled combustion of garbage to reduce it to incombustible matter such as ash and waste gas. The exhaust gases from this process may be toxic, hence it is treated before being released into the environment. This process reduces the volume of waste by 90 per cent and is considered as one of the most hygienic methods of waste disposal. In some cases, the heat generated is used to produce electricity. However, some consider this process, not quite environmentally friendly due to the generation of greenhouse gases such as carbon dioxide and carbon monoxide.</p>
                
                <h3><li>Waste Compaction</li></h3>
                <p>The waste materials such as cans and plastic bottles are compacted into blocks and sent for recycling. This process prevents the oxidation of metals and reduces airspace need, thus making transportation and positioning easy.</p>
                
                <h3><li>Biogas Generation</li></h3>
                <p>Biodegradable waste, such as food items, animal waste or organic industrial waste from food packaging industries are sent to biodegradation plants. In bio-degradation plants, they are converted to biogas by degradation with the help of bacteria, fungi, or other microbes. Here, the organic matter serves as food for the micro-organisms. The degradation can happen aerobically (with oxygen) or anaerobically (without oxygen). Biogas is generated as a result of this process, which is used as fuel, and the residue is used as manure.</p>
                
                <h3><li>Composting</li></h3>
                <p>All organic materials decompose with time. Food scraps, yard waste, etc., make up for one of the major organic wastes we throw every day. The process of composting starts with these organic wastes being buried under layers of soil and then, are left to decay under the action of microorganisms such as bacteria and fungi.This results in the formation of nutrient-rich manure. Also, this process ensures that the nutrients are replenished in the soil. Besides enriching the soil, composting also increases the water retention capacity. In agriculture, it is the best alternative to chemical fertilisers.</p>

                <h3><li>Vermicomposting</li></h3>
                <p> Vermicomposting is the process of using worms for the degradation of organic matter into nutrient-rich manure. Worms consume and digest the organic matter. The by-products of digestion which are excreted out by the worms make the soil nutrient-rich, thus enhancing the growth of bacteria and fungi. It is also far more effective than traditional composting.</p>

    
            </ol>
        </div>
        <Footer/>
        </div>
    );
}

export default Trash;