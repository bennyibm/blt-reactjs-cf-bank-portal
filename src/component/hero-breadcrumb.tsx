import React, {FunctionComponent} from "react"
import { Link } from "react-router-dom"

const HeroBreadcrumb : FunctionComponent<{title : string, description? : string}> = ({title, description}) =>{
    return(
        <div className="content_info">
            {/* Info Section title*/}
            <div className="section-title-01 breadcrumb-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 style={{color : "white"}}>{title}</h3>
                            <h5 style={{color : "white"}}>Capital Financial BANK</h5>
                            <p style={{color : "white"}}>
                                {description}
                            </p>
                        </div>
                        <div className="col-md-5 hidden-xs hidden-sm">
                            <div className="image-title-section">
                            <img src="img/women-head.png" alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Info Section Title*/}
            {/* breadcrumbs*/}
            <div className="breadcrumbs breadcrumbs-sections">
            <ul>
                <li className="breadcrumbs-home">
                    <Link to="#" title="Back To Home">
                        <i className="fa fa-home" />
                    </Link>
                </li>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>/</li>
                <li>{title}</li>
            </ul>
            </div>
            {/* End breadcrumbs*/}
        </div>
    )
}

export default HeroBreadcrumb