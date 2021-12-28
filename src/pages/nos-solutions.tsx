import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";

export default function NosSolutions() {
    return(
        <>
            <HeroBreadcrumb title="Nos solutions" />

            {/* Info Content - Carousel Services*/}
            <div className="content_info">
            <div className="padding-bottom-mini">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                    <h2><span>Nos</span> Solutions</h2>
                    <p className="lead">
                        Les clients recherchent des solutions personnalisées et holistiques. En fonction des besoins uniques de nos clients, nous adaptons les solutions à un large éventail d'offres - de la conception de portefeuille à l'allocation d'actifs et aux solutions de conseil.
                    </p>
                </div>
                {/* End title-vertical-line*/}
                {/* Container Area - Boxes Services */}
                <div className="container">
                {/* boxes-services */}
                <div id="boxes-carousel" className="padding-top">
                    {/* item-boxe-services */}
                    <div className="item-boxed-service">
                    <h4>Une culture <br />d'excellence</h4>
                    <span style={{textAlign : "justify"}}>La force de notre entreprise repose sur notre concentration sur nos clients et nos employés.</span>
                    {/* <Link to="#"><i className="fa fa-plus-circle" /> View more</Link> */}
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="item-boxed-service">
                        <h4>
                        Notre équipe d'experts en investissement.
                        </h4>
                        <span style={{textAlign : "justify"}}>
                        Le Groupe d'investissement dans les énergies alternatives
                        dispose de professionnels hautement qualifiés et
                        expérimentés possédant une vaste connaissance de
                        l'industrie ainsi qu'une expertise des produits, ce qui nous
                        permet d'élaborer des solutions créatives adaptées aux
                        besoins des sociétés du portefeuille
                        </span>
                        <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="item-boxed-service">
                    <h4>Large orientation sectorielle</h4>
                    <span style={{textAlign : "justify"}}></span>
                    {/* <Link to="#"><i className="fa fa-plus-circle" /> View more</Link> */}
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="item-boxed-service">
                    <h4>Expertise dans tous les produits.</h4>
                    <span style={{textAlign : "justify"}}></span>
                    {/* <Link to="#"><i className="fa fa-plus-circle" /> View more</Link> */}
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    {/* <div className="item-boxed-service">
                    <h4>Relation privilégiée avec les sponsors, les propriétaires et les équipes de direction.</h4>
                    <span style={{textAlign : "justify"}}>
                    Nous nouons des relations solides et durables avec les propriétaires, les gestionnaires et les sociétés de portefeuille. Nous construisons la confiance grâce à la qualité de notre exécution en travaillant avec les équipes de direction à chaque étape du processus.
                        </span>
                    <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                    </div> */}
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="item-boxed-service">
                    <h4>Compétitive</h4>
                    <span style={{textAlign : "justify"}}>
                    Nous fournissons des solutions créatives et complètes adaptées aux besoins commerciaux de nos sociétés de portefeuille
                    </span>
                    {/* <Link to="#"><i className="fa fa-plus-circle" /> View more</Link> */}
                    </div>
                    {/* End item-boxe-services */}
                </div>
                {/* End boxes-services */}
                </div>
                {/* End Container Area - Boxes Services */}
            </div>
            </div>
            {/* End Info Content - Carousel Services*/}

        </>
    )
}