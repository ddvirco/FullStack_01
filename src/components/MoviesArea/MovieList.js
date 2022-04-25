import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddMovieComp from "./AddMovies";
import AllMoviesComp from "./AllMovies";

function MovieList(){

    const [allMovies, setAllMovies] = useState([])
    const [findMovie, setFindMovie] = useState({})    
    const [searchOk, setSearchOk] = useState([])

    let { path, url} = useRouteMatch()

    useEffect(async ()=> 
    {
        let resp = await axios.get("http://localhost:8000/api/movies")
        setAllMovies(resp.data)
         
    }, [])

    const sendData = async () =>
    {
        await allMovies.forEach(x => 
            {
                axios.post("http://localhost:8000/api/movies", x)
            })
    }
    
    const searchMovie = () => 
    {
        let find = allMovies.filter(x => x.name.toLowerCase() == findMovie.toLowerCase() )
        setSearchOk(find)
    }

    return(
        <div>
            <BrowserRouter>
                Movies:<br/>
                <Link to={url + "/allMovies"}><button>All Movies</button></Link>
                <Link to={url + "/addMovie"}><button>Add Movie</button></Link>
                Find movie: <input type="text" onChange={e => setFindMovie(e.target.value)} />
                <input type="button" value="Search" onClick={searchMovie}/>
                {/* <input type="button" value="Send" onClick={sendData}/> */}
                <Switch>
                    <Route path={path + "/allMovies" }>
                        {
                           searchOk.length == 0 ?  
                            allMovies.map((item, index) => 
                                {
                                    return <AllMoviesComp data={item} key={index} />
                                })
                                :
                            searchOk.map((item, index) => 
                                {
                                    return <AllMoviesComp data={item} key={index} />
                                })    
                        }
                    </Route >
                    <Route path={path + "/addMovie"} component={AddMovieComp} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MovieList