import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";

export default function NotreEquippe() {
    return(
        <div>
            <HeroBreadcrumb title="Notre equippe" />
                        
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
                        {/* <div className="col-md-12 text-center margin-top">
                            <Link to="#" className="btn btn-primary">Get started for free</Link>
                        </div> */}
                    </div>
                </div> 
                </section>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content Team Members*/}
        </div>
    )
}