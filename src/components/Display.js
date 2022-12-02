import politicianInfo from "/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/assets/politician-info.json";
import {PoliticianItem} from "/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/components/PoliticianItem.js"
import { useEffect, useState } from 'react';
import CheckBox from '/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/components/CheckBox.js'
import SortButton from '/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/components/SortButton.js'

function Display() {
    let hm = 0;
    const [vote, setVote] = useState(0)
    const [total, setTotal] = useState(0)
    const [politician, setPolitician] = useState([])
    const [politician1, setPolitician1] = useState(0)
    const [partyFilters, setPartyFilters] = useState([]);
    const [branchFilters, setBranchFilters] = useState([]);
    const [sort, setSort] = useState(false);
    const [sortedData, setSortedData] = useState(politicianInfo.age)
    const toggleSortActiveHandler = () => setSort(a => !a);
    const updateVotes = (uid) => {
        let newVote = politician;
        if (newVote[uid]){
          newVote[uid]+=1;
        }
        else{
          newVote[uid] = 1;
        }
        setVote({...newVote});
        
    }
    const removeVotes = (uid) => {
        let newVote = politician;
        if (newVote[uid]){
          newVote[uid]-=1;
        }
        else{
          newVote[uid] = 0;
        }
        setVote({...newVote});
    }
    function partyFilter(party) {
        setPartyFilters([...partyFilters, party])
    }
    const removePartyFilter = party => {
        setPartyFilters(partyFilters.filter(partyFilter => partyFilter != party));
    }
    function branchFilter(branch) {
        setBranchFilters([...branchFilters, branch])
    }
    const removeBranchFilter = branch => {
        setBranchFilters(branchFilters.filter(branchFilter => branchFilter != branch))
    }

    const filterByParty = item => {
        if (partyFilters.length === 0) return true;

        return partyFilters.includes(item.party);
    }
    const filterByBranch = item => {
        if (branchFilters.length === 0) return true;

        return branchFilters.includes(item.branch);
    }
    function handleSort() {
        filteredArray = filteredArray.sort((a,b) => sortFunction(a,b));
    }
    const sortFunction = (a,b) => {
        return a.age - b.age
    }
    const randomSort = (a,b) => {
        return -1;
    }
    const sortChange = (a,b) => {
        if (sort) {
            return sortFunction(a,b);
        } else {
            randomSort(a,b);
        }
    }
    const filteredArray = politicianInfo.filter(item => filterByParty(item)).filter(item => filterByBranch(item));
    filteredArray.sort((a,b) => sortChange(a,b))

    return (
        <div>
            <div>
                <div className="title">Electoral College</div>
                <div>
                    <CheckBox partyFilter={partyFilter} branchFilter={branchFilter} removePartyFilter={removePartyFilter} removeBranchFilter={removeBranchFilter}/>
                </div>
                <div>
                    <SortButton class="sortButton" sortFunction={() => setSort(!sort)}/>
                </div>
                <div class="App">
                {filteredArray.map((item, index) => {
                    return(<PoliticianItem key={index} updateVotes={updateVotes} item={item} index={index} vote={vote} setVote={setVote} removeVotes={removeVotes}/>)
                })}
                </div>
            </div>
            <div className="votes">
                <h2>Votes</h2>
                
                {Object.keys(politician).map((key) => {
                return(
                    <div className="votes">
                        {politicianInfo[key].name + ": " + politician[key] + " "}
                        
                    </div>
                )
                })}
                
            </div>
            <div className="totVotes">
                <h2>Total Votes: </h2>
                <div className="voteText">{politician.reduce((a,v) =>  a = a + v, 0 )}</div>
            </div>
        </div>
    )

}
export default Display