import React, { useState } from "react"
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
    'Augustus Gloop': augustus_gloop,
    Babe: babe,
    Bailey: bailey,
    Cherub: cherub,
    'Galaxy Note': galaxy_note,
    'Leggo My Eggo': leggo_my_eggo, 
    Peppa: peppa,
    "Piggy smalls": piggy_smalls,
    Piglet: piglet,
    Porkchop: porkchop,
    Trouble: trouble,
    'Truffle Shuffle': truffle_shuffle,  
  };
  
function HogTile( {hog} ) {
    const [showDetails, setShowDetails] = useState(false)

    const imageLink = images[hog.name]
    
    const details = (
        <ul>
            <li>{hog.specialty}</li>
            <li>{hog.greased ? "greazy" : "non greazy"}</li>
            <li>{hog.weight}</li>
            <li>{hog['highest medal achieved']}</li>
        </ul>
    )

    return (
        <div onClick={() => setShowDetails(!showDetails)}>
            <h1>{hog.name}</h1>
            <img src={imageLink} alt={hog.name} />
            {showDetails ? details : null}
        </div>
    )
}

export default HogTile