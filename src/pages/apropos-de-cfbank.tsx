import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";

export default function AproposDeCFBANK() {
    return(
        <div>
            <HeroBreadcrumb title="Apropos de CF BANK" />
            {/* Info Content - Boxes Services*/}
            <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                {/* Container Area - Boxes Services */}
                <div className="container">
                    <div className="row">
                    <div className="col-md-5">
                        <img src="img/gallery/3.jpg" alt="" className="img-responsive" />
                    </div>       
                    <div className="col-md-7"  style={{textAlign : "justify"}} >
                        <div className="title-subtitle">
                        <h5>Presentation</h5>
                        <h3>Qui sommes nous ?</h3>
                        <p className="lead">
                            Un groupe d'institutions financières qui fournit des services definancement et de conseil a des institutions du monde entier, notamment des banques, des compagnies d'assurance, des sociétés de gestion d'actifs, des sociétés de technologie financière et des institution financières spécialisées

                        </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5></h5>
                                <p style={{color : "black"}}>
                                    Capital Financial Bank ltd (CF Bankest un leader mondial des services bancaires d’affaire, d'investissement, des valeurs mobilières et de la gestion de placements qui fournit une large gamme de services financiers à une clientèle importante et diversifiée qui comprend des sociétés, des institutions financières, des gouvernements et des particuliers. Fondée en 2019, la société possède des bureaux dans 9 pays et un réseau d’envoyés spéciaux dans tous les principaux centres financiers du monde.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h5></h5>
                                <p style={{color : "black"}}>
                                    Need more ideas? Create an outline of the important
                                    sections you want to include in your booklet. Businesses
                                    often include their vision and mission, in addition to their
                                    yearly goals and metrics. For an event booklet, include the
                                    day's schedule or a list of speakers. Shops also hand out
                                    catalogs, listing their products and the prices. What's
                                    important is that you know the purpose of your booklet, and
                                    from there, you'll have millions of ideas ready!
                                    Whether you're creating a compilation of your recipes or
                                    showcasing your latest promotions, just create a good
                                    balance of content and you're on your way to a clear,
                                    effective booklet.
                                </p>
                            </div>
                        </div>
                    </div>             
                    {/* Col boxes-services */}
                    
                    {/* End Col boxes-services */}
                    </div>
                </div>
                {/* End Container Area - Boxes Services */}
                </div>
            </div>
            {/* End Info Content - Boxes Services*/}
            {/* Info Content  - Clients Downloads Area */}
            <div className="parallax-window" data-parallax="scroll" data-image-src="img/cf-bank-hero.png">
                {/* Content Parallax*/}
                <div className="opacy_bg_02 paddings">
                <div className="container">
                    <div className="row">
                    {/* title-downloads */}             
                    <h1 className="title-downloads">
                        <span className="logo-clients">CF-BANK</span> Has more than
                        <span className="responsive-numbers">
                        <span>2</span>
                        ,
                        <span>3</span>
                        <span>8</span>
                        <span>9</span>
                        ,
                        <span>5</span>
                        <span>1</span>
                        <span>8</span>
                        </span>
                        Clients.
                    </h1>  
                    {/* End title-downloads */}     
                    {/* subtitle-downloads */} 
                    <div className="subtitle-downloads">
                        <h4>The best service with the <i className="fa fa-heart" /></h4>
                    </div> 
                    {/* End subtitle-downloads */}  
                    </div>
                </div> 
                </div>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content  - Clients Downloads Area */}
            {/* Info Varius*/}
            <div className="content_info">
                {/* Info Resalt=""*/}
                <div className="skin_base color-white paddings">
                <div className="container wow fadeInUp">
                    <div className="row">
                    <div className="col-md-6">
                        <h2>Pourquoi nous chioisir</h2>
                        <p>
                            Nous nous efforçons constamment d'être créatifs et d'anticiper les besoins changeants de nos clients en développant de nouveaux produits et services dans une gamme complète de classes d'actifs, y compris les titres à revenu fixe, les marchés monétaires, les capitaux publics et privés, les matières premières, les fonds spéculatifs et l'immobilier.
                        </p>
                        <h4>En quoi sommes nous differents</h4>
                        <div className="row">
                        <div className="col-md-6">
                            <ul className="list-styles">
                            <li><i className="fa fa-check" /> <Link to="#">Répondre aux besoins de nos clients</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Gestionnaires des risques</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Réactivité et créativité.</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-styles">
                            <li><i className="fa fa-check" /> <Link to="#">Réactivité et créativité.</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Solution unique et complète.</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Accès au capital pour les sociétés à capital limité</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="img/cf-bank-hero.png" alt="" className="img-responsive" style={{borderRadius : 10}} />
                    </div>                    
                    </div>
                </div>
                </div>
                {/* End Info Resalt=""*/}
            </div>
            {/* Info Varius*/}
            {/*Info Content Team Members*/}
            <div className="content_info">
                {/* Parallax Background */}
                <div className="borders world-bg" />
                {/* Parallax Background */}
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                <h2><span>Team</span> Members</h2>
                <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                </div>
                {/* End title-vertical-line*/}
                {/* Content Parallax*/}
                <section className="paddings">
                <div className="container">
                    <div className="row">
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                            <a href="img/team/1.jpg" className="fancybox"><img src="img/team/1.jpg" alt="" /></a>
                            <h4>Jeniffer</h4>
                            <span className="country"><img src="img/country/london.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">jm@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                            <img src="img/team/2.jpg" alt="" />
                            <h4>Federick</h4>
                            <span className="country"><img src="img/country/au.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">fg@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                            <img src="img/team/3.jpg" alt="" />
                            <h4>Maria</h4>
                            <span className="country"><img src="img/country/us.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">ms@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                                <img src="img/team/4.jpg" alt="" />
                                <h4>John</h4>
                                <span className="country"><img src="img/country/london.png" alt="" /> London, UK</span>
                                <ul className="list-styles">
                                    <li><i className="fa fa-envelope" /> <Link to="#">jr@iwthemes.com</Link></li>
                                    <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                    <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                    <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        <div className="col-md-12 text-center margin-top">
                            <Link to="/notre-equippe" className="btn btn-primary">Voir plus</Link>
                        </div>
                    </div>
                </div> 
                </section>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content Team Members*/}
            
        </div>

    )
}