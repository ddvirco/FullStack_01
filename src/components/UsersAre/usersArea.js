import { BrowserRouter ,Link, useRouteMatch, Switch, Route } from "react-router-dom";
import AddUserComp from "./addUser";
import AllUsersComp from "./allUser";

function UsersAreaComp(){

    let {path, url} = useRouteMatch()
    return(
        <div>
            Users:<br/>
            <BrowserRouter>
                <Link to={url + '/allUsers'}>All Users</Link>
                <span>|</span>
                <Link to={url + '/addUser'}>Add user</Link>
            
                <Switch>
                    <Route path={path + '/allUsers'} component={AllUsersComp} />
                    <Route path={path + '/addUser'} component={AddUserComp}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default UsersAreaComp