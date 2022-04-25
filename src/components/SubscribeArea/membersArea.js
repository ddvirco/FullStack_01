import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Switch, useRouteMatch } from "react-router-dom"
import AddMemberComp from "./addMember"
import AllMembersComp from "./allMembers"

function MembersArea(){
    const [members, setMembers] = useState([])
    // const [testMembers, setTestMembers] = useState([])
    let { path, url} = useRouteMatch()
    
    useEffect(async ()=>
    {
        let resp = await axios.get("http://localhost:8000/api/members");
        setMembers(resp.data)
    })

    const testClick = async () =>
    {
        let resp = await axios.get("http://localhost:8000/api/members")
        // עיצוב הדאטא נעשה בבאקאנד
         
        // let allData = resp.data
        // let allArr = []
        // allData.forEach(x => 
        //     {
        //         let obj = {name: x.name, email: x.email, city: x.address.city}
        //         allArr.push( obj)
        //     });
        //     setMembers(allArr)    
        setMembers(resp.data)
        // await members.forEach(x => 
        //     {
        //         axios.post("http://localhost:8000/api/members", x)
        //     })

    }

    return (
        <div>
            <BrowserRouter>
                Subscription: <br/>
                <Link to={url + '/allMembers'}>All Members</Link>
                <span>|</span>
                <Link to={url+ "/addMember"}>Add Member</Link>
                <span>|</span>

                <Switch>
                    <Route path={path + '/allMembers'}>
                        {/* {
                            members.map((item, index) => 
                                {
                                    return  <AllMembersComp data={item} key={index}/>
                                })   
                        } */}
                        <AllMembersComp members={members}/>
                    </Route>
                    <Route path={path + '/addMember'} component={AddMemberComp} />
                </Switch>
            </BrowserRouter>
        
        
        
        </div>
    )
}

export default MembersArea