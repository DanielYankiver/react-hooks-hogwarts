function Filter({ showGreased, setShowGreased, sortBy, setSortBy }) {
    return (
        <div>
            <label>
                Show Greased Only? 
                <input 
                    type="checkbox" 
                    checked={showGreased}
                    onChange={e => setShowGreased(e.target.checked)}
                />
            </label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    )
}

export default Filter