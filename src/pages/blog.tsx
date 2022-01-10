import React, { FunctionComponent }  from "react";
import { Link } from "react-router-dom";
import { HeroBreadcrumb } from "../component";

const Blog : FunctionComponent = () =>{
    return(
        <>
            <HeroBreadcrumb title="In The news"/>

            <div className="content_info">
                <div className="paddings">
                    {/* events Container*/}  
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 blog-post-section">
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                            {/*Head Blog Post*/}
                            <div className="head-item-blog-post">
                            <i className="fa fa-calculator" />
                            <h3>Protection With you</h3>
                            </div>
                            {/*End Head Blog Post*/}  
                            {/*Img Blog Post*/}
                            <div className="img-item-blog-post">
                            <img src="img/blog-img/1.jpg" alt="" />
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
                            {/*End Img Blog Post*/}  
                            {/*Ingo Blog Post*/}
                            <div className="info-item-blog-post">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                            <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                            </div>
                            {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                            {/*Head Blog Post*/}
                            <div className="head-item-blog-post">
                            <i className="fa fa-database" />
                            <h3>For your future</h3>
                            </div>
                            {/*End Head Blog Post*/}  
                            {/*Img Blog Post*/}
                            <div className="img-item-blog-post">
                            <img src="img/blog-img/2.jpg" alt="" />
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
                            {/*End Img Blog Post*/}  
                            {/*Ingo Blog Post*/}
                            <div className="info-item-blog-post">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                            <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                            </div>
                            {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}  
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                            {/*Head Blog Post*/}
                            <div className="head-item-blog-post">
                            <i className="fa fa-database" />
                            <h3>For your future</h3>
                            </div>
                            {/*End Head Blog Post*/}  
                            {/*Img Blog Post*/}
                            <div className="img-item-blog-post">
                            <img src="img/blog-img/2.jpg" alt="" />
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
                            {/*End Img Blog Post*/}  
                            {/*Ingo Blog Post*/}
                            <div className="info-item-blog-post">
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                            <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                            </div>
                            {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}
                        <ul className="pagination">
                            <li><Link to="#">«</Link></li>
                            <li className="active"><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#">5</Link></li>
                            <li><Link to="#">»</Link></li>
                        </ul>
                        </div>
                        {/* Sidebars*/}
                        <div className="col-md-3">
                        {/* Sidebar */}
                        <aside className="widget">
                            <h4>Widget Search</h4>
                            <form action="#">
                            <div className="input-group">
                                <span className="input-group-addon">
                                <i className="fa fa-envelope" />
                                </span>
                                <input className="form-control" placeholder="Search" name="search" type="text" required={true} />
                                <span className="input-group-addon btn-search">
                                <input defaultValue="Search" type="submit" />
                                </span>
                            </div>
                            </form>
                        </aside>
                        {/* End Sidebar*/}
                        {/* Widget Text */}
                        <aside className="widget">
                            <h4>Widget Text</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                        </aside>
                        {/* End Widget Text */}
                        {/* Widget List */}
                        <aside className="widget">
                            <h4>Widget List</h4>
                            <ul className="list-styles">
                            <li><i className="fa fa-check" /> <Link to="#">World Travel</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">First Class Flights</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">5 Star Accommodations</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Inclusive Packages</Link></li>
                            </ul>
                        </aside>
                        {/* End Widget List */}
                        {/* Widget Video */}
                        <aside className="widget">
                            {/* contact-list*/}
                            <div className="contact-list-container">
                            <ul className="contact-list">
                                <li>
                                <h4>
                                    <i className="fa fa-envelope-o" />
                                        Email:
                                    </h4>
                                <Link to="#">Contact Customer Service</Link>
                                </li>
                                <li>
                                <h4><i className="fa fa-fax" />Phones:</h4>
                                <h5>Miami:</h5>
                                <p>447 50 12</p>
                                <h5>Number Single National</h5>
                                <p>02 4000 4 56234</p>
                                </li>
                                <li>
                                <h4><i className="fa fa-life-ring" />Care centers:</h4>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" /> Offices
                                </Link>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" />Cashiers
                                </Link>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" /> Point friend
                                </Link>
                                </li>
                            </ul>
                            </div>
                            {/* End contact-list*/}
                        </aside>
                        {/* End Widget Video */}
                        <h4>Interesting links</h4>
                        {/* services-mini-boxes*/}
                        <div className="services-mini-boxes">
                            {/* mini-box Item*/}
                            <div className="mini-box">
                            <h5>Taxes</h5>
                            <div className="number-mini-box">
                                01
                            </div>
                            <div className="icon-mini-box color-bg-1">
                                <i className="fa fa-calculator" />
                            </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item */}
                            <div className="mini-box">
                            <h5>Portfolio</h5>
                            <div className="number-mini-box">
                                02
                            </div>
                            <div className="icon-mini-box color-bg-2">
                                <i className="fa fa-briefcase" />
                            </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item*/}
                            <div className="mini-box">
                            <h5>Security</h5>
                            <div className="number-mini-box">
                                03
                            </div>
                            <div className="icon-mini-box color-bg-3">
                                <i className="fa fa-lock" />
                            </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item */}
                            <div className="mini-box">
                            <h5>Education</h5>
                            <div className="number-mini-box">
                                04
                            </div>
                            <div className="icon-mini-box color-bg-4">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            </div>
                            {/* End mini-box Item */}
                        </div>
                        {/* End services-mini-boxes*/}
                        <h4>Download Our App</h4>
                        {/* services-full-boxes*/}
                        <div className="services-full-boxes">
                            {/* full-box Item*/}
                            <div className="full-box">
                            <div className="info-full-box">
                                <Link to="#">Download Android App</Link>
                            </div>
                            <div className="icon-full-box">
                                <i className="fa fa-android" />
                            </div>
                            </div>
                            {/* End full-box  Item*/}
                            {/* full-box Item*/}
                            <div className="full-box">
                            <div className="info-full-box">
                                <Link to="#">Download Apple App</Link>
                            </div>
                            <div className="icon-full-box">
                                <i className="fa fa-apple" />
                            </div>
                            </div>
                            {/* End full-box  Item*/}
                        </div>
                        {/* End services-full-boxes*/}
                        </div>
                        {/* End  Sidebars*/}
                    </div>
                    </div>
                    {/* End events Container*/} 
                </div>
                </div>

        </>
    )
}

export default Blog;