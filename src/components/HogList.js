import { useState } from "react"
import Filter from "./Filter"
import HogTile from "./HogTile"
import HogForm from "./HogForm"

function HogList({ hogs }) {
    const [showGreased, setShowGreased] = useState(true)
    const [sortBy, setSortBy] = useState("weight")
    const [hogState, setHogState] = useState(hogs)

    function handleAddHog(newHog){
        setHogState([newHog, ...hogState])
    }

    // true - show only greazy hogs 
    // false - show all the hogs
    
    // filter: [{},{},{},{}] => [{},{}]
    // sort: [{name: "Piggy"}, {name: "Babe"} => {name: "Babe"}, {name: "Piggy"}]

    const tiles = hogs 
        .filter((hog) => {
            if (showGreased) {
            return hog.greased
            } else {
                return true
            }
        })
        .sort((hogA, hogB) => {
            if (sortBy === "name") {
                // sort by strings
                return hogA.name.localeCompare(hogB.name)
            } else if (sortBy === "weight") {
                // sort by numbers 
                return hogA.weight - hogB.weight
            }
        })
        .map(hog => <HogTile key={hog.name} hog={hog}/>)

    return (
        <div>
            <h1>HogList</h1>
            <HogForm onAddHog={handleAddHog}/>
            <Filter 
                showGreased={showGreased} 
                setShowGreased={setShowGreased}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            {tiles}
        </div>
    )
}

export default HogList