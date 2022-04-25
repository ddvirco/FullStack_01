import axios from "axios";
import { useEffect, useState } from "react";

function MovieSubscribeComp(props){

    const [sub, setSub] = useState([])

    useEffect( async() => 
    {
      let resp = await axios.get("http://localhost:8000/api/subscribes")
      setSub(resp.data)
    },[])

    // let theSub = sub.filter(x => x.movies.moviesId == props.subData.data._id)

    return(
        <div style={{border:'2px solid green',padding:'5px', margin:'10px'}}>
            <strong>Subscriptions watched:</strong><br/>
            <ul>
                {
                    sub.map((item, index) => 
                        {
                            if ((props.subData.data._id) == (item.movies.movieId))
                                {
                                    return <li key={index} >{item.memberName} , {item.movies.date} </li>
                                }
                        })
                }
            </ul>
        </div>
    );
}

export default MovieSubscribeComp