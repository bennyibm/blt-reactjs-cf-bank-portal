import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

export default function BanqueDAffaires() {
    return(
        <div>
            <HeroBreadcrumb title="Banque d'affairres" heroImagePath="custom/business-thinking-session.jpg" heroImagePosition="bottom" />
            
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <h3 style={{textAlign : "center"}}>Le principal conseiller et financier de confiance de nos clients</h3>
                        <p style={{textAlign : "center", marginLeft : 150, marginRight : 150}}>
                            Nous aspirons à être le principal conseiller et financier de confiance de nos clients, qui comprennent des sociétés, des institutions financières, des sponsors financiers, des gouvernements et des autorités publiques ainsi que des conseils d'administration et des comités spéciaux. La Division des services bancaires d'investissement est à l'avant-garde de la franchise client de Capital Financial Bank.
                        </p>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" src="/img/custom/business-men-circle.jpg" style={{borderRadius : 10, height : 280, objectFit : "cover"}} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h4>Fusions et acquisitions</h4>
                                <p>
                                    Nos banquiers fournissent à nos clients des conseils et des services en matière de fusions et d'acquisitions concernant certaines de leurs décisions et transactions stratégiques les plus importantes.
                                </p>

                                <p>
                                    Notre groupe est un leader du marché en matière de conseil en fusions et acquisitions, y compris les conseils de vente, les défenses contre les raids et l'activisme, les fusions et acquisitions transfrontalières, les missions de comités spéciaux et les opérations de fusion compliquées. Nos clients sont situés à travers le monde et comprennent des entreprises, des investisseurs privés, des agences gouvernementales, des particuliers et des familles. Nous fournissons des conseils sur une gamme complète de transactions, y compris les fusions, les ventes, les acquisitions, les rachats à effet de levier, les coentreprises, les défenses anti-raid, les scissions, les désinvestissements et autres restructurations.
                                </p>
                            </div>
                        </div>               
                        <p >
                            <hr style={{margin : "30px 100px", width : "80%"}} />
                        </p>
                        <div className="row">
                            <div className="col-md-8">
                                <h4>Vente de details</h4>
                                <p>
                                    Consumer Retail Group CFB  conseille ses clients sur un large éventail de transactions, y compris les fusions et acquisitions, les offres d'actions et de dettes, les dérivés et les produits structurés, la gestion des risques, etc. Nous couvrons des secteurs tels que l'habillement, les aliments et boissons, les aliments et services pour animaux de compagnie, la beauté et produits de soins personnels, restaurants, détaillants spécialisés et purs, grands magasins et supermarchés.
                                </p>
                                <p>
                                    Nous couvrons des clients en Afrique du centre et de l’ouest via nos partenaires financiers, en Europe et en Asie-Pacifique. Nous travaillons avec des clients de toutes tailles, notamment des sociétés, des familles et des fondateurs, des sponsors financiers et d'autres investisseurs financiers.
                                </p>
                            </div>
                            <div className="col-md-4">                       
                                <img className="img-responsive" src="/img/custom/business-woman.jpg" style={{borderRadius : 10, height : 260, objectFit : "cover"}} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}