import axios from "axios"
import { useState } from "react"


function AddMemberComp(props){
    
    const [newMember, setNewMember] = useState({name: '' , email: '' , city: ''})

    const sendMemberData = async (e) => 
    {
        e.preventDefault()
        const resp = await axios.post("http://localhost:8000/api/members", newMember)
        const addMember = resp.data
    
    }



    const cancelBtn = () => 
    {
        props.history.push("/allMembers" )
    }
    return(
        <div>
            Add New Members
            <form onSubmit={e => sendMemberData(e)}>
                Name: <input type="text" onChange={ e=> setNewMember({...newMember , name: e.target.value})} /> <br/>
                Email: <input type="text" onChange={ e=> setNewMember({...newMember , email: e.target.value})}/><br/>
                City: <input type="text" onChange={ e=> setNewMember({...newMember , city: e.target.value})}/><br/>

                <input type="submit" value="Save" />
                {/* <Link to="/allMembers"><button>Cancel</button></Link> */}
                <input type="button" value="Cancel" onClick={cancelBtn} />
 
            </form >
        </div>
    )
};

export default AddMemberComp