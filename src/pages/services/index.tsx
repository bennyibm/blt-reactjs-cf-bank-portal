import React, { FunctionComponent } from "react";
import ServiceTemplate from "./service-template";

export enum SERVICES{

}
const Service : FunctionComponent<{service? : SERVICES}> = ({service}) =>{

    return(
        <>
            <div>
                {/* Info Content - Section Title*/}
                <div className="content_info">
                {/* Info Section title*/}
                <div className="section-title-01">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                        <h3>Services Options</h3>
                        <h5>Great Options for your site</h5>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
                        </div>
                        <div className="col-md-5">
                        <div className="image-title-section">
                            <img src="img/women-head.png" alt="" className="img-responsive" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Info Section Title*/}
                {/* breadcrumbs*/}
                <div className="breadcrumbs breadcrumbs-sections">
                    <ul>
                    <li className="breadcrumbs-home">
                        <a href="#" title="Back To Home">
                        <i className="fa fa-home" />
                        </a>
                    </li>
                    <li>
                        <a href="#">Company</a>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <a href="#">Our Services</a>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        Services Options
                    </li>
                    </ul>
                </div>
                {/* End breadcrumbs*/}
                </div>
                {/* End Info Content - Section Title*/}
                {/* Info Content - Boxes Services*/}
                <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                    <div className="row">
                        {/* Col boxes-services */}
                        <section className="col-md-9">
                        {/* boxes-services */}
                        <div className="row boxes-services">
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>Loan <br />Request</h4>
                                <span>Helping to fulfill your dreams.</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>I want to save or invest</h4>
                                <span>Advise your decisions</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>Request items online</h4>
                                <span>We offer you tools</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>Online Transactions</h4>
                                <span>Secure Information</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>Fees and charges</h4>
                                <span>We offer the lowest rates.</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                                <h4>Financial Services</h4>
                                <span>Best Credits</span>
                                <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                            </div>
                            {/* End item-boxe-services */}
                        </div>
                        {/* End boxes-services */}
                        </section>
                        {/* End Col boxes-services */}
                        {/*Aside - mini and full boxes */}
                        <aside className="col-md-3">
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
                                <a href="#">Download Android App</a>
                            </div>
                            <div className="icon-full-box">
                                <i className="fa fa-android" />
                            </div>
                            </div>
                            {/* End full-box  Item*/}
                            {/* full-box Item*/}
                            <div className="full-box">
                            <div className="info-full-box">
                                <a href="#">Download Apple App</a>
                            </div>
                            <div className="icon-full-box">
                                <i className="fa fa-apple" />
                            </div>
                            </div>
                            {/* End full-box  Item*/}
                        </div>
                        {/* End services-full-boxes*/}
                        </aside>
                        {/* End Aside - mini and full boxes */}
                    </div>
                    </div>
                    {/* End Container Area - Boxes Services */}
                </div>
                </div>
                {/* End Info Content - Boxes Services*/}
                {/* Info Content  - parallax - services Big Title */}
                <div className="parallax-window" data-parallax="scroll" data-image-src="img/parallax-img/parallax-02.jpg">
                {/* Content Parallax*/}
                <section className="opacy_bg_02 paddings">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                        <div className="title-big padding-top">
                            <h2>BEST SERVICES FOR BEST CLIENTS</h2>
                        </div>
                        <a href="#" className="btn btn-primary">View More</a>
                        </div>
                        <div className="col-md-7">
                        {/* boxes-services-02*/}
                        <div className="row">
                            <div className="col-md-6">
                            {/* Item boxed-service-02*/}
                            <div className="item-boxed-service-02">
                                <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                <h4>BILL PAY</h4>
                                <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                            </div>
                            {/* End Item boxed-service-02*/}
                            </div>
                            <div className="col-md-6">
                            {/* Item boxed-service-02*/}
                            <div className="item-boxed-service-02">
                                <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                <h4>BILL PAY</h4>
                                <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                            </div>
                            {/* End Item boxed-service-02*/}
                            </div>
                        </div>
                        <div className="row margin-top-mini">
                            <div className="col-md-4">
                            {/* Item boxed-service-02*/}
                            <div className="item-boxed-service-02">
                                <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                <h4>BILL PAY</h4>
                                <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                            </div>
                            {/* End Item boxed-service-02*/}
                            </div>
                            <div className="col-md-4">
                            {/* Item boxed-service-02*/}
                            <div className="item-boxed-service-02">
                                <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                <h4>BILL PAY</h4>
                                <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                            </div>
                            {/* End Item boxed-service-02*/}
                            </div>
                            <div className="col-md-4">
                            {/* Item boxed-service-02*/}
                            <div className="item-boxed-service-02">
                                <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                <h4>BILL PAY</h4>
                                <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                            </div>
                            {/* End Item boxed-service-02*/}
                            </div>
                        </div>
                        {/* End boxes-services-02*/}
                        </div>
                    </div>
                    </div> 
                </section>  
                {/* End Content Parallax*/} 
                </div>
                {/* End Info Content  - parallax - services Big Title */}
                {/* Info Content - Carousel Services*/}
                <div className="content_info">
                <div className="padding-bottom-mini">
                    {/* title-vertical-line*/}
                    <div className="title-vertical-line">
                    <h2><span>Our</span> Services</h2>
                    <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                    </div>
                    {/* End title-vertical-line*/}
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                    {/* boxes-services */}
                    <div id="boxes-carousel" className="padding-top">
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>Loan <br />Request</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>I want to save or invest</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>Request items online</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>Online Transactions</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>Fees and charges</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="item-boxed-service">
                        <h4>Financial Services</h4>
                        <span>In ac dignissim nunc, eget tristique elit. Cras et lorem posuere, mattis nibh et, volutpat mauris.</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/* End item-boxe-services */}
                    </div>
                    {/* End boxes-services */}
                    </div>
                    {/* End Container Area - Boxes Services */}
                </div>
                </div>
                {/* End Info Content - Carousel Services*/}
                {/* Info Varius*/}
                <div className="content_info">
                {/* Info Resalt=""*/}
                <div className="skin_base color-white paddings">
                    <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-md-6">
                        <h2>Some words about us</h2>
                        <p>You can choose your favorite destination and start planning your long-awaited vacation. We offer thousands of destinations and have a wide variety of hotels so that you can host and enjoy your stay without problems. Book now your trip CF BANK.co</p>
                        <h4>Why we are different</h4>
                        <div className="row">
                            <div className="col-md-6">
                            <ul className="list-styles">
                                <li><i className="fa fa-check" /> <a href="#">World Travel</a></li>
                                <li><i className="fa fa-check" /> <a href="#">First Class Flights</a></li>
                                <li><i className="fa fa-check" /> <a href="#">5 Star Accommodations</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6">
                            <ul className="list-styles">
                                <li><i className="fa fa-check" /> <a href="#">Latest Model Vehicles</a></li>
                                <li><i className="fa fa-check" /> <a href="#">Best Price Guarantee</a></li>
                                <li><i className="fa fa-check" /> <a href="#">Great Experience</a></li>
                            </ul>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                        <div className="col-md-6">
                        <img src="img/gallery/1.jpg" alt="" className="img-responsive" />
                        </div>                    
                    </div>
                    </div>
                </div>
                {/* End Info Resalt=""*/}
                </div>
                {/* Info Varius*/}
                {/* Info Content Process*/}
                <div className="content_info">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                    <h2><span>Process</span> Services</h2>
                    <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                </div>
                {/* End title-vertical-line*/}
                {/* Info Resalt=""*/}
                <div className="paddings">
                    {/* Container Area - services-process */}
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* services-process */}
                        <div className="services-process">
                            {/* item-service-process */}
                            <div className="item-service-process color-bg-1">
                            <div className="head-service-process">
                                <i className="fa fa-cubes" />
                                <h3>INSURANCES</h3>
                            </div>
                            <div className="divisor-service-process">
                                <span className="circle-top">1</span>
                                <span className="circle" />
                            </div>
                            <div className="info-service-process">
                                <h3>Our Insurances</h3>
                                <p>Your peace of mind is priceless, we offer a broad portfolio of solutions to ensure what you love most.</p>
                            </div>
                            </div>
                            {/* End item-service-process */}
                            {/* item-service-process */}
                            <div className="item-service-process color-bg-2">
                            <div className="head-service-process">
                                <i className="fa fa-diamond" />
                                <h3>BENEFITS</h3>
                            </div>
                            <div className="divisor-service-process">
                                <span className="circle-top">2</span>
                                <span className="circle" />
                            </div>
                            <div className="info-service-process">
                                <h3>Our Benefits</h3>
                                <p>We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                            </div>
                            </div>
                            {/* End item-service-process */}
                            {/* item-service-process */}
                            <div className="item-service-process color-bg-3">
                            <div className="head-service-process">
                                <i className="fa fa-bicycle" />
                                <h3>SOCIAL</h3>
                            </div>
                            <div className="divisor-service-process">
                                <span className="circle-top">3</span>
                                <span className="circle" />
                            </div>
                            <div className="info-service-process">
                                <h3>Social Programs</h3>
                                <p>Our programs with social sense, everyday comprehensively improve the quality of life of our members.</p>
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
                                <h3>Resorts Options</h3>
                                <p>We offer the best alt=""ernatives for recreation, relaxation and adventure to share with family and friends.</p>
                            </div>
                            </div>
                            {/* End item-service-process */}
                        </div>
                        {/* End services-process*/}
                        </div>
                    </div>
                    </div>
                    {/* End Container Area - services-process */}
                </div>
                {/* End Info Resalt=""*/}
                </div>
                {/* End Info Content Process*/}
                {/* Info Content - Financial Items*/}
                <div className="content_info">
                {/* Info Resalt=""*/}
                <div className="bg-dark color-white">
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                    <div className="row padding-bottom">
                        <div className="col-md-12">
                        {/* title-vertical-line*/}
                        <div className="title-vertical-line padding-bottom">
                            <h2><span>Financial</span> Management</h2>
                            <p className="lead">Keep informed of the proceeds of their savings.</p>
                        </div>
                        {/* End title-vertical-line*/}
                        </div>
                        <div className="col-md-4 title-subtitle">
                        <h5>Financial</h5>
                        <h3>MANAGEMENT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                        </div>
                        <div className="col-md-8">
                        {/* Items Financials */}
                        <div className="row">
                            {/* Item Financial */}
                            <div className="col-md-3">
                            <div className="item-financial">
                                <div className="item-financial-content color-bg-1">
                                <span>100%</span>
                                <i className="fa fa-apple" />
                                </div>
                                <h5>DEPOSIT</h5>
                            </div>
                            </div>
                            {/* End Item Financial */}
                            {/* Item Financial */}
                            <div className="col-md-3">
                            <div className="item-financial">
                                <div className="item-financial-content color-bg-2">
                                <span>70%</span>
                                <i className="fa fa-android" />
                                </div>
                                <h5>FUNDING</h5>
                            </div>
                            </div>
                            {/* End Item Financial */}
                            {/* Item Financial */}
                            <div className="col-md-3">
                            <div className="item-financial">
                                <div className="item-financial-content color-bg-3">
                                <span>50%</span>
                                <i className="fa fa-windows" />
                                </div>
                                <h5>CAPITALIZATION</h5>
                            </div>
                            </div>
                            {/* End Item Financial */}
                            {/* Item Financial */}
                            <div className="col-md-3">
                            <div className="item-financial">
                                <div className="item-financial-content color-bg-4">
                                <span>90%</span>
                                <i className="fa fa-cogs" />
                                </div>
                                <h5>INCOME</h5>
                            </div>
                            </div>
                            {/* End Item Financial */}
                        </div>
                        {/* End Items Financials */}
                        </div>
                    </div>
                    </div>
                    {/* End Container Area - Boxes Services */}
                </div>
                {/* End Info Resalt=""*/}
                </div>
                {/* End Info Content - Financial Items*/}
            </div>
            
        </>
    )
}

export default Service