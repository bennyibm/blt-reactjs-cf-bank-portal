import React from "react";
import { Link } from "react-router-dom";

export type SponsorProps ={
    label? : string,
    link? : string,
    imageUrl? : string
}

export function SponsorItem({label = "Name Sponsor", link = "#", imageUrl = "img/cf-bank-hero.png"} : SponsorProps){
    return(
        <li data-toggle="tooltip" title={label} data-original-title="Name Sponsor">
            <Link to="#" className="tooltip_hover" title={label}>
                <img style={{width : 150, height : 70, objectFit : "cover"}} src={imageUrl} alt={label} />
            </Link>
        </li>
    )
}
export default function SponsorsArea(){
    return(
        <div className="container wow fadeInUp">
            <div className="row">
                <div className="col-md-12">
                {/* Sponsors Zone*/}     
                <ul className="owl-carousel carousel-sponsors tooltip-hover" id="carousel-sponsors">
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                    <SponsorItem />
                                                         
                </ul> 
                {/* End Sponsors Zone*/}    
                </div>                    
            </div>
        </div>

    )
}