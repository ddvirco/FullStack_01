import MoviesWatchComp from "./moviesWatch"

function DisplayAllMembers(props) {
    return(
        <div style={ {border:'1px solid black'}}>
            <h4>{props.data.name}</h4>

            Email: {props.data.email}<br/>

            City: {props.data.city}<br/>
            
            <input type="button" value="Edit" />
            <input type="button" value="Delete" />
            <MoviesWatchComp memberData={props} />
        </div>
    )
}

export default DisplayAllMembers