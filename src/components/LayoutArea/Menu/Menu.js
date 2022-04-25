import { NavLink } from 'react-router-dom'

function MenuComp(){
    return(
        <div>
            <section>
                <NavLink to="/movies">Movies </NavLink>
                <span>|</span>
                <NavLink to="/subscribe">Subscribe</NavLink>
                <span>|</span>
                <NavLink to="/users">User Management</NavLink>
                <span>|</span>
                {/* <NavLink to="/logout">Log out</NavLink> */}
            </section>
        </div>
    );
}

export default MenuComp;