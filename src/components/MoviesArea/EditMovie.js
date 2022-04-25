import { useState } from "react";

function EditMovieComp(props){
    
    const [movieFullData, setMovieFullData] = useState({name: props.movieDetail.data.name, genres: props.movieDetail.data.genres,
                                                        image: props.movieDetail.data.image, premiered: props.movieDetail.data.premiered })

    const editAllData = (e) => 
    {
        e.preventDefault()
        console.log(movieFullData)
    }  

    return(
        <div style={{border:'3px gold solid', padding:'3px', margin:'3px'}}>
            <form onSubmit={e => editAllData(e)}> 
                Name:<input type="text" value={movieFullData.name} onChange={e=> setMovieFullData({...movieFullData,name: e.target.value})}/><br/>
                Genres: <input type="text" value={movieFullData.genres} onChange={e=> setMovieFullData({...movieFullData,genres: e.target.value})}/><br/>
                Image URL: <input type="text" value={movieFullData.image} onChange={e=> setMovieFullData({...movieFullData,image: e.target.value})}/><br/>
                Premiered: <input type="text" value={movieFullData.premiered} onChange={e=> setMovieFullData({...movieFullData,premiered: e.target.value})}/><br/>
            
                <input type="submit" value="Update" />
                <input type="button" value="Cancel" onClick={ () => props.callback(false)} />
            </form>
        </div>
    );
}

export default EditMovieComp