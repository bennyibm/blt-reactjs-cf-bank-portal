import React from "react"
import { Link } from "react-router-dom"

type HeroBreadcrumbProps = {
    title : string, 
    description? : string
    heroImagePath? : string,
    heroImagePosition? : "top" | "bottom" | "left" | "right" | "center" 
}
export default function HeroBreadcrumb({title, description, heroImagePath = "custom/brainstorming-2.jpg", heroImagePosition = "center"} : HeroBreadcrumbProps){
    return(
        <div className="content_info">
            {/* Info Section title*/}
            <div className="section-title-01 breadcrumb-hero" style={{backgroundImage : `url(/img/${heroImagePath})`, backgroundPosition : heroImagePosition }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h3>{title}</h3>
                            <h5>Capital Financial BANK</h5>
                            <p style={{color : "white"}}>
                                {description}
                            </p>
                        </div>
                        <div className="col-md-5 hidden-xs hidden-sm">
                            <div className="image-title-section">
                            {/* <img src="img/women-head.png" alt="" className="img-responsive" /> */}
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
                    <Link to="/" title="Back To Home">
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
