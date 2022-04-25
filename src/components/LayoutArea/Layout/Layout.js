import { BrowserRouter } from "react-router-dom";
import HeaderComp from "../Header/Header";
import MenuComp from "../Menu/Menu";
import RoutingComp from "../Routing/Routing";

function LayoutComp(){

    return(
        <div>
            <BrowserRouter>
                <header>
                    <HeaderComp />
                </header>
                <nav>
                    <MenuComp />
                </nav>
                <main>
                    <RoutingComp />
                </main>
            </BrowserRouter>
        </div>
    );
}

export default LayoutComp;