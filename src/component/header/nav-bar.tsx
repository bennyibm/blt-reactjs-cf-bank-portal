import React, {FunctionComponent, ReactNode} from "react"
import { Link, useLocation } from "react-router-dom"

const NavBarItem : FunctionComponent<{title : string, link? : string}> = ({title, link}) =>{
    if(!link)
        link = title.toLowerCase()

    const {pathname} = useLocation()
    const isActive = pathname.substring(1) === link 
    return(
        <li className={["dropdown",isActive ? "active" : ""].join(" ")}>
            <Link to={link}>{title}</Link>
        </li>
    )
}

const NavBarItemWithSubMenu : FunctionComponent<{title : string, children : ReactNode}> = ({title, children}) =>{
    return(
        <li className="dropdown">
            <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                {title}
                <b className="caret" />
            </Link>
            <ul className="dropdown-menu">                
                {children}
            </ul>
        </li>

    )
}

const NavBar : FunctionComponent = () =>{
    return(
        <nav id="menu">
            <div  className="navbar yamm navbar-default">
                <div  className="container">
                    <div  className="row">
                        <div  className="navbar-header">
                            <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1"  className="navbar-toggle">
                                <span  className="icon-bar"></span>
                                <span  className="icon-bar"></span>
                                <span  className="icon-bar"></span>
                            </button>
                        </div>
                        <div id="navbar-collapse-1"  className="navbar-collapse collapse">
                            {/* <!-- Nav Bar Items --> */}
                            <ul  className="nav navbar-nav">
                                {/* <NavBarItem title="Apropos de CF BANK" link="apropos-de-cfbank" /> */}
                                <NavBarItemWithSubMenu title="Company">
                                        <li>
                                            <Link to="apropos-de-cfbank"> A propos </Link>
                                        </li>
                                        <li>
                                            <Link to="historique"> Historique </Link>
                                        </li>
                                        <li>
                                            <Link to="ce-qui-nous-differencie"> Pourquoi nous </Link>
                                        </li>
                                        <li>
                                            <Link to="nos-clients"> Nos clients </Link>
                                        </li>
                                        <li>
                                            <Link to="events"> Events </Link>
                                        </li>
                                </NavBarItemWithSubMenu>
                                <NavBarItemWithSubMenu title="Gouvernance">
                                        <li>
                                            <Link to="/gouvernance/Conseil d'administration"> Conseil d'administration </Link>
                                        </li>
                                        <li>
                                            <Link to="/gouvernance/Comité de pilotage">Comité de pilotage </Link>
                                        </li>
                                        <li>
                                            <Link to="/gouvernance/Comité de direction">Comité de direction</Link>
                                        </li>
                                </NavBarItemWithSubMenu>
                                <NavBarItemWithSubMenu title="Nos Divisions">
                                        <li>
                                            <Link to="banque-d-investissement"> Banque d'Investissement </Link>
                                        </li>
                                        <li>
                                            <Link to="banque-d-affaires"> Banque d'affaires </Link>
                                        </li>
                                        <li>
                                            <Link to="notation-financiere"> Notation financiere </Link>
                                        </li>
                                </NavBarItemWithSubMenu>
                                <NavBarItem title="Investisseurs financiers et strategiques" link="investisseurs-financiers-et-strategiques" />
                                {/* <NavBarItem title="Nos solutions" link="nos-solutions" /> */}
                                <NavBarItemWithSubMenu title="Media">
                                        <li>
                                            <Link to="press-release">Press Release</Link>
                                        </li>
                                        <li>
                                            <Link to="blog">In the news</Link>
                                        </li>
                                </NavBarItemWithSubMenu>
                                <NavBarItem title="Contact" link="contact" />
                            </ul>
                            
                            <ul  className="nav navbar-nav navbar-right">
                                <li  className="dropdown">
                                    <Link to="#" data-toggle="dropdown"  className="dropdown-toggle" aria-expanded="false">
                                        <b className="glyphicon glyphicon-search"></b>
                                    </Link>
                                    <ul  className="dropdown-menu">
                                        <li>
                                            <div  className="yamm-content">
                                                <form  className="search-Form" action="#">
                                                    <div  className="input-group">
                                                        <span  className="input-group-addon">
                                                            <i  className="fa fa-search-plus"></i>
                                                        </span>
                                                        <input  className="form-control" placeholder="Search" name="search"  type="text" required={true}/>
                                                    </div>
                                                </form>  
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
