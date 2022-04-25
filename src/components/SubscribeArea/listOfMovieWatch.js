import axios from "axios";
import { useEffect, useState } from "react";

function ListOfMoviesToWatchComp(props){

    const [movieFromMongo, setMovieFromMongo] = useState([])
    const [newSubData, setNewSubData] = useState({
                                        memberId: props.data.data._id,
                                        memberName: props.data.data.name, 
                                        movies: 
                                            {movieId: "", date: ""}
                                    }) 
    useEffect(async () =>
    {   
        let resp = await axios.get("http://localhost:8000/api/movies")
        setMovieFromMongo(resp.data)
    },[]);

    const sendToMongo = async(e) => 
    {
        console.log(newSubData)
        e.preventDefault()
        await axios.post("http://localhost:8000/api/subscribes" , newSubData )
        alert(`${newSubData.movies.movieId} added`)
    }

    return(
        <div>
            Add a new Movie:<br/>
            <form onSubmit={ e => sendToMongo(e)}>
                <select onChange={ e => setNewSubData({...newSubData, movies:{...newSubData.movies,
                                    movieId: movieFromMongo.find(x => x.name == e.target.value)._id}, 
                })} >
                    {
                        movieFromMongo.map((item) => 
                            {
                                return <option key={item._id}>{item.name} </option>
                            })
                    } 
                </select> <input type="date" onChange={e => setNewSubData({...newSubData, movies:{...newSubData.movies, date:e.target.value}})}/>
                <br/>
                <input type="submit" value="Subscribe" /> 
            </form>       
        </div>
    );
}

export default ListOfMoviesToWatchComp