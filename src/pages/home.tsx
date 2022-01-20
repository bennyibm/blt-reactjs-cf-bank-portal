import React from "react";
import { Link } from "react-router-dom";
import { BlogSection, Feature } from "../component";

type SlideItemProps = {
    image? : string,
    principalTitle? : string,
    subTitle? : string,
    description? : string,

}
function SlideItem({image = "custom/assembly.png", principalTitle = "Es-tu prêt?", subTitle = "Votre succès est notre", description = "Trouvez une varieté des services avec CF-BANK"} : SlideItemProps) {
    return(
        <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
            <img src={`/img/${image}`} alt="fullslide1" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
            
            <div className="tp-caption medium_text lft stl" data-x="center" data-hoffset data-y="top" data-voffset={160} data-speed={300} data-start={800} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {subTitle}
            </div>
            <div className="tp-caption large_bold_white sft stb" data-x="center" data-hoffset data-y="top" data-voffset={190} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {principalTitle}
            </div>
            <div className="tp-caption small_light_white sfb stb" data-x="center" data-hoffset data-y="top" data-voffset={260} data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {description}
            </div>
            {/* <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={-100} data-y="center" data-voffset={75} data-speed={300} data-start={1400} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                <Link to="#" className="btn btn-primary"><i className="fa fa-graduation-cap" />View More</Link>
            </div>
            <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={100} data-y="center" data-voffset={75} data-speed={300} data-start={1600} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                <Link to="#" className="btn btn-primary"><i className="fa fa-heart" />View More</Link>
            </div> */}
        </li>
    )
}
export default function Home(){

    const slides = [
        {
            image : "custom/black-business-man.jpg",
            subTitle : "votre succès est notre",
            principalTitle : "Es-tu prêt?"
        },
        {
            image : "custom/man-woman-business.jpg"
        }
]
    return(
        <>
            <div className="tp-banner-container">
                <div className="tp-banner">
                {/* SLIDES CONTENT*/}
                <ul> 
                    {slides.map( ({image, subTitle, principalTitle}) => <SlideItem image={image} subTitle={subTitle} principalTitle={principalTitle} /> )}
                </ul> 
                {/* END SLIDES  */} 
                <div className="tp-bannertimer" />  
                </div>
            </div>
            <div className="content_info">
                <div className="title-vertical-line">
                <h2><span>Services</span> & Divisions</h2>
                <p className="lead">Nous avons créé des alliances avec des entités reconnues qui contribuent à améliorer votre qualité de vie.</p>
                </div>
                <div className="paddings">
                    <div className="container">
                        <div className="row boxes-services" style={{display : "flex", justifyContent : "center"}}>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
                            </div>
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

