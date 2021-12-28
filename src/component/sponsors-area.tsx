import React from "react";
import { Link } from "react-router-dom";

export default function SponsorsArea(){
    return(
        <div className="container wow fadeInUp">
            <div className="row">
                <div className="col-md-12">
                {/* Sponsors Zone*/}     
                <ul className="owl-carousel carousel-sponsors tooltip-hover" id="carousel-sponsors">
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/1.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/2.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/3.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/4.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/5.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/6.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/7.png" alt="cf-bank" /></Link>
                    </li>
                    <li data-toggle="tooltip" title="true"data-original-title="Name Sponsor">
                    <Link to="#" className="tooltip_hover" title="Name Sponsor"><img src="img/sponsors/8.png" alt="cf-bank" /></Link>
                    </li>                                       
                </ul> 
                {/* End Sponsors Zone*/}    
                </div>                    
            </div>
        </div>

    )
}