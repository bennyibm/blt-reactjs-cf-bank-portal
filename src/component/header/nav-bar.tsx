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
                            <ul  className="nav navbar-nav">
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
                                <li className="dropdown yamm-fw">
                                    <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                                        Investisseurs financiers et strategiques
                                        <b className="caret" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="yamm-content">
                                            <div className="row">
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Investisseurs</strong>  
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques">Apropos</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/profile-d-investissement">Profile d'Investissement</Link>
                                                    </li>
                                                </ul>
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Secteurs d'investissement</strong>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/soin-de-sante"> 
                                                            Soin de santé
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/industriels"> 
                                                            Industriels
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/ressources-naturelles"> 
                                                            Ressources Naturelles
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/finance-municipale"> 
                                                            Finance Municipale
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/immobilier"> 
                                                            Immobilier
                                                        </Link>
                                                    </li>
                                                
                                                </ul>
                                                <ul className="col-md-3 list-unstyled">
                                                    <li>
                                                        <strong>Seteur d'investissement</strong>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/technologie-media-et-telecomunications"> 
                                                            Tech, Médias Télécomm
                                                            {/* TECHNOLOGIE, MEDIAS TELECOMMUNICATIONS */}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/infrastructure"> 
                                                            Infrastructures
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/credit"> 
                                                            Crédits
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/prets-senior"> 
                                                            Prets senior
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/investisseurs-financiers-et-strategiques/energies-alternatives"> 
                                                            Enérgies Alternatives
                                                        </Link>
                                                    </li>
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
                                    </ul>
                                </li>

                                <NavBarItemWithSubMenu title="Media">
                                        <li>
                                            <Link to="/in-the-news">In the news</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/press-release">Press Release</Link>
                                        </li> */}
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
