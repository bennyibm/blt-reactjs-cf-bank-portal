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
                <img style={{width : 170, height : 70, objectFit : "contain"}} src={imageUrl} alt={label} />
            </Link>
        </li>
    )
}
export default function SponsorsArea(){
    return(
        <div className="container-fluid wow fadeInUp" style={{backgroundColor : "#efefef"}}>
            <div className="row">
                <div className="col-md-12">
                    <ul className="owl-carousel carousel-sponsors tooltip-hover" id="carousel-sponsors">
                        <SponsorItem label="Duma Solutions" imageUrl="/img/sponsors/duma-solutions.jfif" />
                        <SponsorItem label="Duma Pay" imageUrl="/img/sponsors/duma-pay.png"/>
                        <SponsorItem label="Duma Cash" imageUrl="/img/sponsors/duma-cash.png"/>
                        <SponsorItem label="KabaCash" imageUrl="/img/sponsors/kabacash.png" />
                        <SponsorItem label="Yayo" imageUrl="/img/sponsors/yayo.png"/>
                        <SponsorItem label="EmmerJ Forum" imageUrl="/img/sponsors/emmerj.png" />                                         
                    </ul> 
                </div>                    
            </div>
        </div>

    )
}