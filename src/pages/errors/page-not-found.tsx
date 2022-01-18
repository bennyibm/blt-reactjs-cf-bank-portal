import React, {FunctionComponent} from "react";
import { Feature } from "../../component";

const PageNotFound : FunctionComponent = () =>{
    return (
        <div>
            {/* Info Content - Section Title*/}
            <div className="content_info">
                {/* Info Section title*/}
                <div className="section-title-01 section-title-01-small">
                <div className="container">
                    <div className="row">
                    <div className="col-md-7">
                        <h3>404 Page Error</h3>
                        <h5>FEATURES SECTION</h5>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Info Section Title*/}
                {/* breadcrumbs*/}
                <div className="breadcrumbs breadcrumbs-sections">
                <ul>
                    <li className="breadcrumbs-home">
                    <a href="/" title="Back To Home">
                        <i className="fa fa-home" />
                    </a>
                    </li>
                    <li>
                    <a href="#">Features</a>
                    </li>
                    <li>
                    /
                    </li>
                    <li>
                    404 Page Error
                    </li>
                </ul>
                </div>
                {/* End breadcrumbs*/}
            </div>
            {/* End Info Content - Section Title*/}
            {/* End content info - Error Pagen*/}
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="page-error">
                        <h1>404 <i className="fa fa-bomb" /></h1>
                        <hr className="tall" />
                        <p className="lead">We're sorry, but the page you were looking for doesn't exist.</p>
                        <a href="/" className="btn btn-lg btn-primary">Return Home</a>       
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
            {/* End content info - Error Page */}
        </div>

    )
}

export default PageNotFound