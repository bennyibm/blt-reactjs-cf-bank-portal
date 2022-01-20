import React from "react";
import { Link } from "react-router-dom";


export interface BlogItemProps{
    title : string,
    image : string,
    description :string,
    link : string,
    target? : string,
    metas : {author? : string, date : string, location : string}
}

export function BlogItem() {
    return(
        <div className="col-md-4  padding-bottom">
            <div className="item-blog-post">
                <div className="head-item-blog-post">
                    <i className="fa fa-calculator" />
                    <h3>Emmer'J Forum 2021</h3>
                </div>
                <div className="img-item-blog-post">
                    <img src="/img/custom/emmerj.png" alt="" />
                    <div className="post-meta">
                        <ul>
                            <li>
                                <i className="fa fa-map" />
                                <Link to="#" onClick={e => e.preventDefault()} >Congo/Kinshasa</Link>
                            </li>
                            <li>
                                <i className="fa fa-clock-o" />
                                <span>29-30 Nov. 2021</span>
                            </li>
                            {/* <li>
                                <i className="fa fa-eye" />
                                <span>234 Views</span>
                            </li> */}
                        </ul>                      
                    </div>
                </div>
                
                <div className="info-item-blog-post">
                    <p>
                        Evénement de promotion de l'entrepreneuriat fortement axé sur les usages du numérique où les participants (les jeunes)...
                    </p>

                    <a href="https://forum.emmerj.com" target="_blank"><i className="fa fa-plus-circle" /> View more</a>
                </div>
            </div>
        </div>
    )
}

export default function BlogSection(){
    return(
        <div className="content_info">
            <div className="content_resalt padding-bottom borders">
                <div className="title-vertical-line">
                    <h2><span>Articles</span> Recents</h2>
                    <p className="lead">Restez informé et mis à jour sur toutes les nouvelles liées à votre banque.</p>
                </div>
                <div className="container">
                    <div className="row padding-top">
                        <BlogItem />
                    </div>
                </div>
            </div>
        </div>
    )
}