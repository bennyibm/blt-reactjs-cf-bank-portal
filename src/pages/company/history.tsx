import React from "react";
import { Feature, HeroBreadcrumb } from "../../component";

export default function History(){
    return(
        <div>
            
            <HeroBreadcrumb title="Historique" heroImagePath="custom/brainstorming.jpg"/>

            <div className="content_info">
                <div className="title-vertical-line">
                <h2>Année <span>2019</span></h2>
                <p className="lead">Fondée en 2019, la société possède des bureaux dans 9 pays et un réseau d’envoyés spéciaux dans tous les principaux centres financiers du monde.</p>
                </div>
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="/img/custom/launch-business.jpg" alt="" className="img-responsive" />
                            </div>       
                            <div className="col-md-7">
                                <div className="title-subtitle">
                                {/* <h3>Qui sommes nous</h3> */}
                                <p className="lead">
                                    Capital Financial Bank, plc. est un leader mondial des services bancaires d’affaire, d'investissement, des valeurs mobilières et de la gestion de placements qui fournit une large gamme de services financiers à une clientèle importante et diversifiée qui comprend des sociétés, des institutions financières, des gouvernements et des particuliers.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Culture d'excellence</h5>
                                        <p>
                                        La force de notre entreprise et notre culture d'excellence reposent sur notre concentration sur nos clients et nos employés.
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Compétitive</h5>
                                        <p style={{paddingTop : -25}}>
                                            Nous fournissons des solutions créatives et complètes adaptées aux besoins commerciaux de nos sociétés de portefeuille.
                                        </p>
                                    </div>
                                </div>
                            </div>             
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
        </div>

    )
}

