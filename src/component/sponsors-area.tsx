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
        <div className="container wow fadeInUp">
            <div className="row">
                <div className="col-md-12">
                    <ul className="owl-carousel carousel-sponsors tooltip-hover" id="carousel-sponsors">
                        <SponsorItem label="Duma Solutions" imageUrl="https://pbs.twimg.com/profile_banners/1405471927058194432/1635158938/600x200" />
                        <SponsorItem label="Duma Pay" imageUrl="http://dumapay.blthouse.tech/static/media/duma1.4c5c89c1.png"/>
                        <SponsorItem label="Duma Cash" imageUrl="https://collect.dumacash.com/images/logo-duma-cash.png"/>
                        <SponsorItem label="KabaCash" imageUrl="https://kabacash.com/wp-content/uploads/2021/02/K-pour-Benny-1-e1613042265263.png" />
                        <SponsorItem label="Yayo" imageUrl="https://topup.yayo-africa.com/images/logo-yayo.png"/>
                        <SponsorItem label="EmmerJ Forum" imageUrl="https://forum.emmerj.com/assets/img/logo.png" />                                         
                    </ul> 
                </div>                    
            </div>
        </div>

    )
}