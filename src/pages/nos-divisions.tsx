import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";

export default function NosDiisions() {
    return(
        <>
            <HeroBreadcrumb title="Nos Divisions" />
                        
            {/* End content info - Page Full Widht*/}
            <div className="content_info">
                <div className="paddings">
                <div className="container">
                    <div className="row" style={{paddingTop : 40, paddingBottom : 40}}>
                        <div className="col-md-8">
                            <h3>BANQUE D'INVESTISSEMENT</h3>
                            <h5 className="sub-title">CONSEILLER & FINANCIER DE CONFIANCS</h5>
                            {/* <p>Pellentesque habitant morbi tristique orper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidu senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p> */}
                            <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#">Financement (Derives d'entreprise, Marche de capitaux, Groupe financement, Marche de capitaux propres, etc).</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Leveraged finance capital markets</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Gestion de responsabilité</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Strat</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">                       
                            <img className="img-responsive" src="img/cf-bank-hero.png" style={{borderRadius : 10}} alt="" />
                        </div>
                    </div> 
                    <div className="row bg-gray" style={{paddingTop : 40, paddingBottom : 40}}>
                        <div className="col-md-4">
                            <img className="img-responsive" src="img/cf-bank-hero.png" style={{borderRadius : 10}} alt="" />
                        </div>
                        <div className="col-md-8" style={{textAlign : "right",    direction: "rtl"}}>
                            <h3>Banque d'affaires</h3>
                            <h5 className="sub-title">CONSEILS STRATEGIQUE ET FINANCIER</h5>
                            {/* <p>Pellentesque habitant morbi tristique orper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidu senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p> */}
                            <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#">Fusions and Acquisitions</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">CF Bank Assets Management</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Capital investment d'entreprise</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Action de croissance</Link></li>
                            </ul>
                        </div>
                    </div>               
                    <div className="row" style={{paddingTop : 40, paddingBottom : 40}}>
                        <div className="col-md-8">
                            <h3>Notation financiere</h3>
                            <h5 className="sub-title">OFFRE INTEGREE DE NOTATION DE CREDIT</h5>
                            {/* <p>Pellentesque habitant morbi tristique orper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidu senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p> */}
                            <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#">Evaluateur hypothécaire commercial</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Prospective de la solvabilité d'un émetteur</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Evaluations de credit et estimation de credit</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Evaluation de la gestion de risque d'entreprise</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Cote de credit en monnaie étrangère et locale</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">                       
                            <img className="img-responsive" src="img/cf-bank-hero.png"  style={{borderRadius : 10}} alt="" />
                        </div>
                    </div> 
                </div>
                </div>
            </div>
            {/* End content info - Page Full Widht */}
        </>
    )
}