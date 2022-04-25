import axios from "axios"
import { useState } from "react"

function TestComp(){
    
    const [testData, setTestData] = useState([]);
    const [oneUser, setOneUser] = useState({})
    const [newUser, setNewUser] = useState({name: '', age: 0, city: ''})

    const getAllData = async () => 
    {
        let resp = await axios.get("http://localhost:8000/api/users")
        setTestData(resp.data);
    }

    const getOne = async () => 
    {
        let resp = await axios.get("http://localhost:8000/api/users/616f13afd7c2b9f4326e6fdc")
        setOneUser(resp.data);
    }

    const AddNewOne = async () => 
    {
        let resp = await axios.post("http://localhost:8000/api/users", newUser)
        
    }

    return(
        <div>
        <input type="button" value="Get Data" onClick={getAllData}/>
        <br/>
        <ul>
            {
                testData.map((item) => 
                    {
                        return <li key={item._id}>  {item.name}, {item.age}, {item.city}</li>
                    })
            }
        </ul>
        <br/>
        <input type="button" value="Get One User" onClick={getOne} /><br/>
        {oneUser.name} + {oneUser.age}<br/>

        Name: <input type="text" onChange={e => setNewUser({...newUser, name: e.target.value})} /><br/> 
        Age: <input type="number" onChange={e => setNewUser({...newUser, age: e.target.value})} /><br/> 
        City: <input type="text" onChange={e => setNewUser({...newUser, city: e.target.value})} /><br/> 
        <input type="button" value="Add New One" onClick={AddNewOne} />
       
       </div>
    )
}

export default TestComp