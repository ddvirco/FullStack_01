import axios from "axios";
import { useState } from "react"

function AddUserComp(){
    
    const [newUser, setNewUser] = useState({firstName: '', lastName: '', userName: '',
                                            sessionTimeOut: 0, createdDate: '', 
                                            permission: [] })

    const sendData = async (e) => 
    {
        e.preventDefault()
        await axios.post("http://localhost:8000/api/users", newUser)
        console.log(newUser)
    }
    const viewSub = () => 
    {
        let name = "View Subscriptions"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        setNewUser({...newUser, permission: [...newUser.permission,"View Subscriptions"]})
        
    }

    const createSub = () => 
    {
        let name = "Create Subscriptions"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        setNewUser({...newUser, permission: [...newUser.permission, "Create Subscriptions"]} )        
    }
    
    const deleteSub = () => 
    {        
        let name = "Delete Subscriptions"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        else {
            setNewUser({...newUser, permission:[...newUser.permission, "Delete Subscriptions"] })        
        }
    }

    const viewMov = () => 
    {
        let name = "View Movies"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        setNewUser({...newUser, permission:[...newUser.permission, "View Movies"] })        
    }

    const createMov = () => 
    {
        let name = "Create Movies"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        setNewUser({...newUser, permission:[...newUser.permission, "Create Movies"] })        
    }

    const deleteMov = () => 
    {
        let name = "Delete Movies"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        if (index >= 0){
            arr.splice(index , 1)
            console.log(arr)
        }
        setNewUser({...newUser, permission:[...newUser.permission, "Delete Movies"] })        
    }

    const findIndex = () => {
        let name = "Delete Subscriptions"
        let arr = newUser.permission
        let index = arr.findIndex( x => x == name)
        console.log(index)
        console.log(arr)

    }

    return(
        <div>
            <form onSubmit={e => sendData(e)}>
                First Name: <input type="text" onChange={e => setNewUser({...newUser, firstName: e.target.value})} /><br/>
                Last Name: <input type="text" onChange={e => setNewUser({...newUser, lastName: e.target.value})} /><br/>
                User Name: <input type="text" onChange={e => setNewUser({...newUser, userName: e.target.value})} /><br/>
                Session time out(Minutes): <input type="text" onChange={e => setNewUser({...newUser, sessionTimeOut: e.target.value})} /><br/>
                Created Data: <input type="date" onChange={e => setNewUser({...newUser, createdDate: e.target.value})}/><br/>
                Permission: <br/>
                    <input type="checkBox" onChange={viewSub}/> View Subscriptions<br/>
                    <input type="checkBox" onChange={createSub} /> Create Subscriptions<br/>
                    <input type="checkBox" onClick={deleteSub}/> Delete Subscriptions<br/>
                    <input type="checkBox" onClick={viewMov}/> View Movies<br/>
                    <input type="checkBox" onClick={createMov} /> Create Movies<br/>
                    <input type="checkBox" onClick={deleteMov}/> Delete Movies<br/>
                <br/>
                <input type="button" value="testIndex" onClick={findIndex} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddUserComp;