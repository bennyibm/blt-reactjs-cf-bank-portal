import {FunctionComponent} from "react"
import NavBar from "./nav-bar"
import TopBar from "./top-bar"

const Header : FunctionComponent = () =>{
    // variant of blue 2a2d7c6b
    // pure white fff
    return(
        <div style={{backgroundColor : "#fff"}}>
            {/* <!-- fond-header--> */}
            <div id="fond-header"  className="fond-header pattern-header-01"></div>

            {/* <!-- Topbar Area --> */}
            <TopBar />

            {/* <!-- NavBar Area --> */}
            <NavBar />
        </div>
    )
}

export default Header;
