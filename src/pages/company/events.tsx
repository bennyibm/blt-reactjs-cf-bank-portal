import React from "react";
import { Link } from "react-router-dom";
import { Feature, HeroBreadcrumb } from "../../component";
import { SlideItemProps } from "../../component/custom-slider";

export default function Events(){
    const slides : SlideItemProps[] = [
        {
            image : "/img/custom/evenements.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        },
        {
            image : "/img/custom/brainstorming-2.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        },
        {
            image : "/img/custom/black-circle-business.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        }
    ]
    return(
        <>
            <HeroBreadcrumb title="Nos evenements" heroImagePath="custom/evenements.jpg" slides={slides}/>
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-subtitle padding-bottom-mini">
                                            {/* <h5>Keep informed and updated on all news related to your bank.</h5> */}
                                            <h3>Prochains événements CF-BANK.</h3>
                                        </div>
                                    </div>
                                    {/* Item event*/} 
                                    <div className="col-md-12">
                                        <div className="item-event">
                                            <div className="event-icon">
                                                <i className="fa fa-calendar-o" />
                                                <span className="date-number">30</span>
                                                <span className="date-month">Jan. 2022</span>
                                            </div>
                                            <div className="event-info">
                                                <h4><Link to="#">Congress opening CF-BANK</Link></h4>
                                                <h5>30 Janvier 2022</h5>
                                                <span>London, United Kingdom</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-subtitle padding-bottom-mini">
                                            {/* <h5>Keep informed and updated on all news related to your bank.</h5> */}
                                            <h3>Événements passés de CF-BANK.</h3>
                                        </div>
                                    </div>
                                    {/* Item event*/} 
                                    <div className="col-md-12">
                                        <div className="item-event">
                                            <div className="event-icon">
                                                <i className="fa fa-calendar-o" />
                                                <span className="date-number">29</span>
                                                <span className="date-month">Nov. 2021</span>
                                            </div>
                                            <div className="event-info">
                                                <h4><a href="http://forum.emmerj.com" target="_blank">Emmer'J Forum 2021 </a></h4>
                                                <h5>29-30 Novembre 2021</h5>
                                                <span>Centre d'événements Roméo Golf, Kinshasa, R.DCongo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                                
                        </div>
                    </div>
                    <Feature />
                </div>
            </div>
        </>
    )
}

