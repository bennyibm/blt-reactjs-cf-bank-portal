import React from "react";
import { Feature } from "../../component";
import { SlideItemProps } from "../../component/custom-slider";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

export default function AproposDeCFBANK() {
    const slides : SlideItemProps[] = [
        {
            image : "/img/custom/business-men-circle.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        },
        {
            image : "/img/custom/business-men-meeting.jpg",
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
    return (
        <div>
            <HeroBreadcrumb title="Apropos de CF BANK" heroImagePath="custom/business-men-circle.jpg" heroImagePosition="bottom" slides={slides} />
            <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                    <div className="container">
                        <div className="row" style={{ display: "flex", flexWrap : "wrap" }}>
                            <div className="col-md-5">
                                <img src="/img/custom/business-men-circle.jpg" style={{ borderRadius: 10 }} alt="" className="img-responsive" />
                            </div>
                            <div className="col-md-7" style={{ textAlign: "justify", display: "flex", flexDirection: "column", justifyContent: "center" }} >
                                <div className="title-subtitle">
                                    <h3>Qui sommes nous</h3>
                                    <p className="">
                                        Notre groupe d'institutions financières fournit des services de financement et de conseil à des institutions du monde entier, notamment des banques, des compagnies d'assurance, des sociétés de gestion d'actifs, des sociétés de technologie financière et des institutions financières spécialisées.
                                    </p>
                                    <p className="">
                                        Avec près de 300 employés et consultant représentant à travers certains pays du monde - et une présence croissante sur des marchés en croissance tels que l’Afrique centrale et l’ouest, l'Europe et la Chine via nos partenaires - nos spécialistes offrent une large gamme de produits, notamment des conseils en fusions et acquisitions, du financement par actions et par emprunt, des financements structurés et une gestion / couverture des risques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content_info">
                <div className="skin_base color-white paddings">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Pourquoi nous choisir</h2>
                                <p className="text-white">
                                    Nous nous efforçons constamment d'être créatifs et d'anticiper les besoins changeants de nos clients en développant de nouveaux produits et services dans une gamme complète de classes d'actifs, y compris les titres à revenu fixe, les marchés monétaires, les capitaux publics et privés, les matières premières, les fonds spéculatifs et l'immobilier.
                                </p>
                                <h4>En quoi sommes nous differents</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-styles">
                                            <li>
                                                <i className="fa fa-check" /> 
                                                <span >Répondre aux besoins de nos clients</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" /> 
                                                <span >Gestionnaires des risques</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" /> 
                                                <span >Réactivité et créativité.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-styles">
                                            <li>
                                                <i className="fa fa-check" /> 
                                                <span >Réactivité et créativité.</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <span >Solution unique et complète.</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" /> 
                                                <span >Accès au capital pour les sociétés à capital limité</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="/img/custom/business-men-meeting.jpg" alt="" className="img-responsive" style={{ borderRadius: 10 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                        <div className="row" style={{ display: "flex", flexWrap : "wrap-reverse" }}>
                            <div className="col-md-5">
                                <img src="/img/custom/black-circle-business.jpg" alt="" style={{ height: 300, objectFit: "cover", borderRadius: 10 }} className="img-responsive" />
                            </div>
                            <div className="col-md-7" style={{ textAlign: "justify", display: "flex", flexDirection: "column", justifyContent: "center" }} >
                                <div className="title-subtitle">
                                    <h4>Comment nous sommes organisé </h4>
                                    <p>
                                        Notre structure mondiale nous permet de mieux répondre aux besoins stratégiques et financiers de nos clients dans toutes les zones géographiques et industries. CFB comprend deux domaines : CFB Classic et notre groupe de financement. Cette double structure nous permet d'offrir la plus large gamme de produits et de services de conseil, renforçant notre capacité à fournir les meilleures solutions de leur catégorie à nos clients.
                                    </p>
                                </div>
                                <div className="title-subtitle">
                                    <h4>Solutions</h4>
                                    <p>
                                        Les clients recherchent des solutions personnalisées et holistiques. En fonction des besoins uniques de nos clients, nous adaptons les solutions à un large éventail d'offres - de la conception de portefeuille à l'allocation d'actifs et aux solutions de conseil.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Feature />
                    </div>
                    {/* End Container Area - Boxes Services */}
                </div>
            </div>

        </div>

    )
}