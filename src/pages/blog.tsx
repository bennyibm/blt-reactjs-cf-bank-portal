import React  from "react";
import { Link } from "react-router-dom";
import { Feature, HeroBreadcrumb } from "../component";

export default function Blog(){
    return(
        <>
            <HeroBreadcrumb title="In The news" heroImagePath="custom/in-the-news.jpg"/>

            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 blog-post-section">
                                <div className="item-blog-post">
                                    <div className="head-item-blog-post">
                                        <i className="fa fa-database" />
                                        <h3>Emmer'J Forum</h3>
                                    </div>
                                    <div className="img-item-blog-post">
                                        <img src="/img/custom/emmerj.png" alt="" />
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
                                            Ev??nement de promotion de l'entrepreneuriat fortement ax?? sur les usages du num??rique o?? les participants (les jeunes) auront l'occasion de se former et interagir avec des intervenants de haut calibre venus de partout dans le monde afin de les former et partager leur exp??rience.
                                        </p>
                                        <a href="http://forum.emmerj.com" target="_blank"><i className="fa fa-plus-circle" /> D??couvrir</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <aside className="widget">
                                    <h4>CF-Bank</h4>
                                    <p>
                                        Notre groupe d'institutions financi??res fournit des services de financement et de conseil ?? des institutions du monde entier, notamment des banques, des compagnies d'assurance, des soci??t??s de gestion d'actifs, des soci??t??s de technologie financi??re et des institutions financi??res sp??cialis??es.
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

