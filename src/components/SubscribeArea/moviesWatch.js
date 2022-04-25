import { useState } from "react";
import ListOfMoviesToWatchComp from "./listOfMovieWatch";

function MoviesWatchComp(props){
    
    const [subNewMovie, setSubNewMovie] = useState(false)

    return(
        <div style={{border:'2px pink solid', margin:'10px'}}>
            <input type="button" value="Subscribe to new movie" onClick={() => setSubNewMovie(!subNewMovie)} />
            {
                subNewMovie == true ? <ListOfMoviesToWatchComp data={props.memberData} /> : null
            } 
        </div>
    );
}

export default MoviesWatchComp