import React from "react";
import { Link } from "react-router-dom";
import { BlogSection, CustomSlider, Feature } from "../component";
import { SlideItemProps } from "../component/custom-slider";

export default function Home(){
    const dumySlides : SlideItemProps[] = [
        {
            image : "/img/custom/black-business-man-2.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        },
        {
            image : "/img/custom/man-woman-business.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une gamme des services avec notre banque"
        }
    ]
    
    return(
        <>
            <CustomSlider slides={dumySlides} />

            <div className="content_info">
                <div className="title-vertical-line">
                <h2><span>Services</span> & Divisions</h2>
                <p className="lead">Nous avons créé des alliances avec des entités reconnues qui contribuent à améliorer votre qualité de vie.</p>
                </div>
                <div className="paddings">
                    <div className="container">
                        <div className="boxes-services-custom">
                                <div className="item-boxed-service"  style={{textAlign : "center"}}>
                                    <h4>BANQUE D'AFFAIRES</h4>
                                    <p>
                                        La Division des services bancaires d'investissement est à l'avant-garde de la franchise client de Capital Financial Bank.
                                    </p>
                                    <br/>
                                    <Link to="/nos-divisions/banque-d-investissement">
                                        <i className="fa fa-plus-circle" />
                                        Découvrir
                                    </Link>
                                </div>
                            {/* <div className=""> */}
                                <div className="item-boxed-service"  style={{textAlign : "center"}}>
                                    <h4>BANQUE D'INVESTISSEMENT</h4>
                                    <p>
                                        Nous nous efforçons de fournir les meilleurs conseils et l'excellence en matière d'exécution sur les transactions
                                    </p>
                                    <br/>
                                    <Link to="/nos-divisions/banque-d-investissement">
                                        <i className="fa fa-plus-circle" />
                                        Découvrir
                                    </Link>
                                </div>
                            {/* </div> */}
                            {/* <div className=""> */}
                                <div className="item-boxed-service"  style={{textAlign : "center"}}>
                                    <h4>NOTATION FINANCIERE</h4>
                                    <p>
                                        Notre offre intégrée de notations de crédit, de recherche sur les risques et de perspectives critiques
                                    </p>
                                    <br/>
                                    <Link to="/nos-divisions/notation-financiere">
                                        <i className="fa fa-plus-circle" />
                                        Découvrir
                                    </Link>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax-window" data-parallax="scroll" data-image-src="/img/custom/world-business.jpg">
                <section className="opacy_bg_02 paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="title-big padding-top">
                                <h2>INVESTISSEURS FINANCIERS ET STRATEGIQUES</h2>
                                </div>
                                <Link to="/investisseurs-financiers-et-strategiques" className="btn btn-primary">Découvrir</Link>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="item-boxed-service-02">
                                        <h5>SOIN DE SANTE</h5>
                                        <p>
                                            Le groupe Santé fournit des conseils et des services dans un large éventail de sous-secteurs...
                                        </p>
                                        <Link to="/investisseurs-financiers-et-strategiques/soin-de-sante">
                                            <i className="fa fa-plus-circle" />
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item-boxed-service-02">
                                        <h5>RESSOURCES NATURELLES</h5>
                                        <p>
                                            Notre groupe des ressources naturelles travaille avec des clients dans les domaines de l'énergie, de l'électricité, des ...
                                        </p>
                                        <Link to="/investisseurs-financiers-et-strategiques/ressources-naturelles">
                                            <i className="fa fa-plus-circle" />
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="row margin-top-mini">
                                <div className="col-md-4">
                                    <div className="item-boxed-service-02">
                                        <h5>PRETS SENIOR</h5>
                                        <p>
                                            CF-Bank, Loan Partners et Senior Credit Partners est l'une des plus grandes familles de fonds...
                                        </p>
                                        <Link to="/investisseurs-financiers-et-strategiques/prets-senior">
                                            <i className="fa fa-plus-circle" />
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="item-boxed-service-02">
                                        <h5>CREDIT</h5>
                                        <p>
                                            Nous investissons dans la dette mezzanine, les prêts de premier rang, les prêts spécialisés...
                                        </p>
                                        <Link to="/investisseurs-financiers-et-strategiques/credit">
                                            <i className="fa fa-plus-circle" />
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="item-boxed-service-02">
                                        <h5>INFRASTRUCTURES</h5>
                                        <p>
                                            Notre groupe d'investissement dans les infrastructures cherche à investir du capital...
                                        </p>
                                        <Link to="/investisseurs-financiers-et-strategiques/infrastructure">
                                            <i className="fa fa-plus-circle" />
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>  
            </div>
            <BlogSection />
            <div className="content_info">
                <div className="title-vertical-line">
                    <h2>
                        <span>Services</span> de processus
                    </h2>
                    <p className="lead">
                        Nous avons créé des alliances avec des entités reconnues qui contribuent à améliorer votre qualité de vie.
                    </p>
                </div>
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* services-process */}
                                <div className="services-process">
                                {/* item-service-process */}
                                <div className="item-service-process color-bg-1">
                                    <div className="head-service-process">
                                        <i className="fa fa-cubes" />
                                        <h3>ASSURANCES</h3>
                                    </div>
                                    <div className="divisor-service-process">
                                        <span className="circle-top">1</span>
                                        <span className="circle" />
                                    </div>
                                    <div className="info-service-process">
                                        <h3>Nos assurances</h3>
                                        <p>
                                            Votre tranquillité d'esprit n'a pas de prix, nous offrons un large portefeuille des solutions
                                        </p>
                                    </div>
                                </div>
                                {/* End item-service-process */}
                                {/* item-service-process */}
                                <div className="item-service-process color-bg-2">
                                    <div className="head-service-process">
                                    <i className="fa fa-diamond" />
                                    <h3>AVANTAGES</h3>
                                    </div>
                                    <div className="divisor-service-process">
                                    <span className="circle-top">2</span>
                                    <span className="circle" />
                                    </div>
                                    <div className="info-service-process">
                                    <h3>Nos avantages</h3>
                                    <p>
                                        Nous avons créé des alliances avec des entités reconnues qui contribuent à améliorer votre qualité de vie.
                                    </p>
                                    </div>
                                </div>
                                {/* End item-service-process */}
                                {/* item-service-process */}
                                <div className="item-service-process color-bg-3">
                                    <div className="head-service-process">
                                    <i className="fa fa-bicycle" />
                                    <h3>SOCIALE</h3>
                                    </div>
                                    <div className="divisor-service-process">
                                    <span className="circle-top">3</span>
                                    <span className="circle" />
                                    </div>
                                    <div className="info-service-process">
                                    <h3>Programmes sociaux</h3>
                                    <p>
                                        Nos programmes à sens social améliorent chaque jour de manière globale la qualité de vie de nos membres.
                                    </p>
                                    </div>
                                </div>
                                {/* End item-service-process */}
                                {/* item-service-process */}
                                <div className="item-service-process color-bg-4">
                                    <div className="head-service-process">
                                        <i className="fa fa-hotel" />
                                        <h3>RESORTS</h3>
                                    </div>
                                    <div className="divisor-service-process">
                                    <span className="circle-top">4</span>
                                    <span className="circle" />
                                    </div>
                                    <div className="info-service-process">
                                    <h3>Options de villégiature</h3>
                                    <p>
                                        Nous offrons les meilleures alternatives de loisirs, de détente et d'aventure à partager en famille et entre amis.
                                    </p>
                                    </div>
                                </div>
                                {/* End item-service-process */}
                                </div>
                                {/* End services-process*/}
                            </div>
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
            
        </>

    )
}

