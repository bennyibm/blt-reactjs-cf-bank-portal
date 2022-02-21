import React, { ReactNode} from "react"
import { Link, useLocation } from "react-router-dom"

function NavBarItem (props : {title : string, link? : string}){
    if(!props.link)
        props.link = props.title.toLowerCase()

    const {pathname} = useLocation()
    const isActive = pathname.endsWith(props.link) 
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={props.link}>{props.title}</Link>
        </li>
    )
}

function NavBarItemWithSubMenu(props : {title : string, classNames? : string, children : ReactNode}){
    const {pathname} = useLocation()

    const titleSlug = props.title.toLowerCase().replaceAll(" ", "-")
    const isActive = pathname.substring(1).startsWith(titleSlug)
    return(
        <li  className={`dropdown ${props.classNames} ${isActive && "active"}`}>
            <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                {props.title}
                <b className="caret" />
            </Link>
            <ul className="dropdown-menu">                
                {props.children}
            </ul>
        </li>

    )
}

export default function NavBar(){
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
                            <ul  className="nav navbar-nav">
                                <NavBarItemWithSubMenu title="Compagnie">
                                    <li>
                                        <Link to="/compagnie/apropos-de-cfbank"> A propos </Link>
                                    </li>
                                    <li>
                                        <Link to="/compagnie/historique"> Historique </Link>
                                    </li>
                                    <li>
                                        <Link to="/compagnie/ce-qui-nous-differencie"> Pourquoi nous </Link>
                                    </li>
                                    <li>
                                        <Link to="/compagnie/nos-clients"> Nos clients </Link>
                                    </li>
                                    <li>
                                        <Link to="/compagnie/events"> Events </Link>
                                    </li>
                                </NavBarItemWithSubMenu>
                                {/* <NavBarItemWithSubMenu title="Gouvernance">
                                        <li>
                                           <Link to="/gouvernance/conseil-d-administration"> Conseil d'administration </Link>
                                        </li>
                                        <li>
                                            <Link to="/gouvernance/comite-de-pilotage">Comité de pilotage </Link>
                                        </li>
                                        <li>
                                            <Link to="/gouvernance/comite-de-direction">Comité de direction</Link>
                                        </li>
                                </NavBarItemWithSubMenu>  */}
                                <NavBarItemWithSubMenu title="Nos Divisions">
                                    <li>
                                        <Link to="/nos-divisions/banque-d-investissement"> Banque d'Investissement </Link>
                                    </li>
                                    <li>
                                        <Link to="/nos-divisions/banque-d-affaires"> Banque d'affaires </Link>
                                    </li>
                                    <li>
                                        <Link to="/nos-divisions/notation-financiere"> Notation financiere </Link>
                                    </li>
                                </NavBarItemWithSubMenu>
                                <NavBarItemWithSubMenu title="Investisseurs financiers et strategiques" classNames="yamm-fw">
                                    <li>
                                        <div className="yamm-content">
                                            <div className="row">
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Investisseurs</strong>  
                                                    </li>
                                                    <NavBarItem title="Apropos" link="/investisseurs-financiers-et-strategiques" />
                                                    <NavBarItem title="Profil d'investissement" link="/investisseurs-financiers-et-strategiques/profile-d-investissement" />
                                                </ul>
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Secteurs d'investissement</strong>
                                                    </li>
                                                    <NavBarItem title="Soin de santé" link="/investisseurs-financiers-et-strategiques/soin-de-sante" />
                                                    <NavBarItem title="Industriels" link="/investisseurs-financiers-et-strategiques/industriels" />
                                                    <NavBarItem title="Ressources Naturelles" link="/investisseurs-financiers-et-strategiques/ressources-naturelles" />
                                                    <NavBarItem title="Finance Municipale" link="/investisseurs-financiers-et-strategiques/finance-municipale" />
                                                    <NavBarItem title="Immobilier" link="/investisseurs-financiers-et-strategiques/immobilier" />
                                                </ul>
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Seteur d'investissement</strong>
                                                    </li>
                                                    <NavBarItem title="Tech, Médias Télécomm" link="/investisseurs-financiers-et-strategiques/technologie-media-et-telecomunications" />
                                                    <NavBarItem title="Infrastructures" link="/investisseurs-financiers-et-strategiques/infrastructures" />
                                                    <NavBarItem title="Crédits" link="/investisseurs-financiers-et-strategiques/credits" />
                                                    <NavBarItem title="Prets senior" link="/investisseurs-financiers-et-strategiques/prets-senior" />
                                                    <NavBarItem title="Enérgies Alternatives" link="/investisseurs-financiers-et-strategiques/energies-alternatives" />
                                                    
                                                </ul>
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Access to all functions of Cf-Bank</strong>
                                                    </li>
                                                    <li>
                                                        <p style={{textAlign : "justify", wordBreak : "break-word"}}>
                                                            Notre groupe d'institutions financières fournit des services de financement et de conseil à des institutions du monde entier.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <img src="img/img-theme/img-dropdown-bg.png" className="img-nav" alt="" /> */}
                                    </li>
                                </NavBarItemWithSubMenu>
                                

                                <NavBarItemWithSubMenu title="Media">
                                        {/* <li>
                                            <Link to="/in-the-news">In the news</Link>
                                        </li> */}
                                        <NavBarItem title="In the news" link="/media/in-the-news" />

                                        {/* <li>
                                            <Link to="/press-release">Press Release</Link>
                                        </li> */}
                                </NavBarItemWithSubMenu>
                                <NavBarItem title="Contact" link="contact" />
                            </ul>
                            {/* <ul  className="nav navbar-nav navbar-right">
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
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

