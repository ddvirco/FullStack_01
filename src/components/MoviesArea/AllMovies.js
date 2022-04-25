import { useState } from "react";
import EditMovieComp from './EditMovie'
import MovieSubscribeComp from "./movieSubscribe";

function AllMoviesComp(props){

    const [editMovie, setEditMovie] = useState(false)

    const updateMovie = () => 
    {
        setEditMovie(!editMovie)
    }    

    return(
        <div style={{border:'1px solid blue', margin:'5px', padding:'10px'}}>
            <h4>{props.data.name}, {props.data.premiered}</h4>
            Genres: {props.data.genres.map((item) => {return `"${item}"` + " ,"})}
            <br/>
            <img src={props.data.image} style={{ }} /><br/>

            <input type="button" value="Edit" onClick={updateMovie}/>
            <input type="button" value="Delete" onClick={() => console.log(props.data.ended)}/>
        
            {
                editMovie == true ? <EditMovieComp movieDetail={props} callback={data => setEditMovie(data)}/> : null
            }
            <MovieSubscribeComp subData={props} />
        </div>
    );
}

export default AllMoviesComp