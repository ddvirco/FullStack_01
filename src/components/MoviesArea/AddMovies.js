import axios from "axios";
import { useState } from "react";

function AddMovieComp(){
    
    const [newMovie, setNewMovie] = useState({name: '', genres: '' , 
                                            image: '', premiered: ''})

    const newMovieData = async(e)=> 
    {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/movies" , newMovie)
        alert(`${newMovie.name} added`)
    }

    return(
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={e => newMovieData(e)}>
                Name: <input type="text" onChange={e => setNewMovie({...newMovie, name: e.target.value})}/><br/>
                Genres: <input type="text" onChange={e => setNewMovie({...newMovie, genres: e.target.value})}/><br/>
                Image URL: <input type="text" onChange={e => setNewMovie({...newMovie, image: e.target.value})}/><br/>
                Premiered: <input type="date" onChange={e => setNewMovie({...newMovie, premiered: e.target.value})} /><br/>

                <input type="submit" value="Save" />
                <input type="button" value="Cancel" />
            </form>
        </div>
    );
}

export default AddMovieComp