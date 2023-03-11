import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"


function Glass() {
    document.body.style = 'background: #daffd6;';
    return (
        <div >
            <Navbar/>
       <h1 style={{fontSize: 35}}>GLASS</h1><br></br>
        <div className="Glass" style={{ textAlign: "left", fontFamily: "Poppins", fontSize: 20 }} >
            <p>A few efficient ways of how to dispose glass waste are as follows:</p>
            
            <ol><h3><li>Break the glass with caution.</li></h3>
                <p>In the instance that you actually have a whole piece of glass but it exceeds the dimensions that your waste management company will handle, you'll need to break the piece into smaller, easily disposable pieces. Place the glass down flat on the ground and cover the entire pane with an old blanket or several old towels to keep the shards in place before using a hammer or shovel to break the pane.</p>
                
                <h3><li>Take proper precautions</li></h3>
                <p>Whether you dropped a bottle or had to break your own large pane of glass, always put on work gloves and thick-soled shoes while handling broken glass. You should also keep kids and pets away from the area until you’ve finished the cleaning process.</p>
                
                <h3><li>Place the bigger pieces in a large trash bag</li></h3>
                <p>You should start by collecting the larger pieces of glass, and you should place them in a large trash bag.Thick outdoor trash bags are preferable because they are less likely to puncture and tear. In addition to using thick trash bags, you should actually place a second trash bag inside the first before you start putting the broken glass inside. It’s much easier to double-bag the clean-up effort before you start rather than trying to fit a jagged trash bag inside a second one later.</p>
                
                <h3><li>Vacuum up smaller pieces</li></h3>
                <p>Once you have collected the larger pieces to the degree that you can, vacuum up the area with the hose attachment on a shop vacuum. Use the hose attachment to get the entire area up to approximately fifteen feet away since broken glass can fly quite far.Make sure you use the hose attachment on a shop vac. A conventional rolling vacuum will only crush the glass into even tinier shards and it lacks the suction power of the hose.Many people are tempted to use a broom to sweep up the glass instead of a vacuum, but glass shards can easily trap in the bristles of your broom only to be redistributed later. A vacuum is a safer method.</p>
                
                <h3><li>Blot the area with a soft piece of bread.</li></h3>
                <p>Even a vacuum can miss some of the truly tiny pieces that can nonetheless cut or irritate skin. For an easy and economical way to capture those pieces of glass dust, you can get a piece of soft bread from the kitchen and blot it face down across the area to trap the remainder of the glass.Though bread is the item you most likely already have in your home, other household items can work well in this case too. A halved potato, packing or duct tape, or a lint roller also work well for this purpose.Make sure you do not accidentally touch the area of the item with the glass stuck to it.</p>

                <h3><li>Wipe down the area with a damp paper towel.</li></h3>
                <p> damp paper towel can finish the job, so wipe the area down thoroughly.[12] Also remember to wipe down the soles of your shoes to get any glass dust you may have picked up during the rest of the cleaning process.</p>

                <h3><li>Place the trash bag in a cardboard box.</li></h3>
                <p>Some companies may also request that you dispose of broken glass in a solid container as well.[13] If this is the case with your waste management company, then you should also place the glass-filled garbage bags in a cardboard box, seal it, and label it broken glass.</p>
                
                <h3><li>Put the container out with the normal trash.</li></h3>
                <p>At this point, you have properly contained and labeled the broken glass, and you can simply put it into your regular trashcan or community’s dumpster.</p>
                
    
            </ol>
        </div>
        <Footer/>
        </div>
    );
}

export default Glass;