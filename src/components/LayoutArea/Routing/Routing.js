import { Route, Switch } from "react-router";
import MovieList from "../../MoviesArea/MovieList";
import MembersArea from "../../SubscribeArea/membersArea";
import UsersAreaComp from "../../UsersAre/usersArea";

function RoutingComp(){
    return(
        <div>
            <Switch>
                <Route path="/movies" component={MovieList} exact/>
                <Route path="/subscribe" component={MembersArea} exact/>
                <Route path="/users" component={UsersAreaComp} exact />
            </Switch>
        </div>
    );
}

export default RoutingComp;