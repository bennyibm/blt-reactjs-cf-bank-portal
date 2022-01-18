import React, { FunctionComponent }  from "react";
import { Link } from "react-router-dom";
import { Feature, HeroBreadcrumb } from "../component";

export default function Blog(){
    return(
        <>
            <HeroBreadcrumb title="In The news" heroImagePath="custom/world-business.jpg"/>

            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 blog-post-section">
                                <div className="item-blog-post">
                                    <div className="head-item-blog-post">
                                        <i className="fa fa-database" />
                                        <h3>Emer'J Forum</h3>
                                    </div>
                                    <div className="img-item-blog-post">
                                        <img src="img/blog-img/2.jpg" alt="" />
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    <i className="fa fa-user" />
                                                    <Link to="#">cf-bank</Link>
                                                </li>
                                                <li>
                                                    <i className="fa fa-clock-o" />
                                                    <span>29 Nov. 2021</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-eye" />
                                                    <span>234 Views</span>
                                                </li>
                                            </ul>                      
                                        </div>
                                    </div>
                                    <div className="info-item-blog-post">
                                        <p>
                                            Créé à l'initiative de DUMA SOLUTIONS, une entreprise œuvrant dans la FINTECH, crée par des congolais issus de la diaspora (Canada et UK), le Forum ERMMER"J est un rendez-vous unique en son genre en RDC, de part son approche et son contenu.
                                        </p>
                                        <a href="http://forum.emmerj.com" target="_blank"><i className="fa fa-plus-circle" /> Découvrir</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <aside className="widget">
                                    <h4>CF-Bank</h4>
                                    <p>
                                        Notre groupe d'institutions financières fournit des services de financement et de conseil à des institutions du monde entier, notamment des banques, des compagnies d'assurance, des sociétés de gestion d'actifs, des sociétés de technologie financière et des institutions financières spécialisées.
                                    </p>
                                </aside>
                                <aside className="widget">
                                    <div className="contact-list-container">
                                        <ul className="contact-list">
                                            <li>
                                                <h4>
                                                    <i className="fa fa-envelope-o" />
                                                    Phone:
                                                </h4>
                                                <a href="tel:+442045018493">+442045018493</a>
                                            </li>
                                            <li>
                                                <h4>
                                                    <i className="fa fa-fax" />
                                                    Email:
                                                </h4>
                                                <p>
                                                    <a href="mailto:info@cfbank.co.uk">info@cfbank.co.uk</a>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
        </>
    )
}

