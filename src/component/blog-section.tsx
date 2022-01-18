import React from "react";
import { Link } from "react-router-dom";


export function BlogItem() {
    return(
        <div className="col-md-4  padding-bottom">
            <div className="item-blog-post">
                <div className="head-item-blog-post">
                    <i className="fa fa-calculator" />
                    <h3>Protection With you</h3>
                </div>
                <div className="img-item-blog-post">
                    <img src="/img/custom/launch-business.jpg" alt="" />
                    <div className="post-meta">
                        <ul>
                            <li>
                                <i className="fa fa-user" />
                                <Link to="#">Iwthemes</Link>
                            </li>
                            <li>
                                <i className="fa fa-clock-o" />
                                <span>April 23, 2015</span>
                            </li>
                            <li>
                                <i className="fa fa-eye" />
                                <span>234 Views</span>
                            </li>
                        </ul>                      
                    </div>
                </div>
                
                <div className="info-item-blog-post">
                    <p>Find all the support and information they need to make all decisions about saving for your future.</p>
                    <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
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
                    <h2><span>Last</span> News</h2>
                    <p className="lead">Keep informed and updated on all news related to your bank.</p>
                </div>
                <div className="container">
                    <div className="row padding-top">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                </div>
            </div>
        </div>
    )
}