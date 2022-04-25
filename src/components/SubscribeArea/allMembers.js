import DisplayAllMembers from "./displayAllMembers"

function AllMembersComp(props){
    

    
    return(
        <div>

            {
                props.members.map((item) => 
                    {
                        return <DisplayAllMembers key={item._id} data={item} />
                    })
            }
        </div>
    )
}

export default AllMembersComp
