import "/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/App.css"

function CheckBox({partyFilter: applyPartyFilter, branchFilter: applyBranchFilter, removePartyFilter, removeBranchFilter}) {
    const handlePartyFilterChange = (event, party) => {
        if (event.target.checked == true) {
            applyPartyFilter(party)
        } else {
            removePartyFilter(party)
        }
    }

    const handleBranchFilterChange = (event, branch) => {
        if (event.target.checked === true) {
            applyBranchFilter(branch)
        } else {
            removeBranchFilter(branch)
        }
    }
    return (
        <div>
            <div className="sortPartyText">Filter by Party</div>
            <div class="party">
                <label>
                    <input type="checkbox" onChange={event => handlePartyFilterChange(event, "Democrat")}/>
                    Democrat
                </label>
                <label>
                    <input type="checkbox" value="republican" onChange={event => handlePartyFilterChange(event, "Republican")}/>
                    Republican
                </label>
            </div>
            <div className="sortBranchText">Filter by Branch</div>
            <div class="branch">
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilterChange(event, "Executive")}/>
                    Executive
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilterChange(event, "Legislative")}/>
                    Legislative
                </label>
                <label>
                    <input type="checkbox" onChange={event => handleBranchFilterChange(event, "Judicial")}/>
                    Judicial
                </label>
            </div>
        </div>
    )
    
}
export default CheckBox