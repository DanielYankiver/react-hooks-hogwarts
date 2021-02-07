import { useState } from "react"

function HogForm({ onAddHog }) {
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState("")
    const [weight, setWeight] = useState("")
    const [medal, setMedal] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newHog ={
            name,
            specialty,
            greased,
            weight: parseFloat(weight),
            'highest medal achieved': medal,
        }
        onAddHog(newHog)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
        />

        <label htmlFor="specialty">Specialty</label>
        <input 
            type="text" 
            id="specialty" 
            value={specialty} 
            onChange={e => setSpecialty(e.target.value)} 
        />

        <label htmlFor="greased">Greased</label>
        <input 
            type="checkbox" 
            id="greased" 
            checked={greased} 
            onChange={e => setGreased(e.target.value)} 
            step="0.1"
        />

        <label htmlFor="weight">Weight</label>
        <input 
            type="number" 
            id="weight" 
            value={weight} 
            onChange={e => setWeight(e.target.value)} 
        />

        <label htmlFor="medal">Medal</label>
        <input 
            type="text" 
            id="medal" 
            value={medal} 
            onChange={e => setMedal(e.target.value)} 
        />

        <button type="submit">Add Hog</button>
    </form>
    )
}

export default HogForm