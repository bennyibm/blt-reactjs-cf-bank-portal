import React, {FunctionComponent} from "react";

const AboutUs : FunctionComponent= () =>{
    return(
        <div>
            {/* Info Content - Section Title*/}
            <div className="content_info">
                {/* Info Section title*/}
                <div className="section-title-01">
                <div className="container">
                    <div className="row">
                    <div className="col-md-7">
                        <h3>About Us</h3>
                        <h5>Great Company</h5>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
                    </div>
                    <div className="col-md-5 hidden-xs hidden-sm">
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
                    About Us
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
                    <div className="col-md-5">
                        <img src="img/gallery/3.jpg" alt="" className="img-responsive" />
                    </div>       
                    <div className="col-md-7">
                        <div className="title-subtitle">
                        <h5>Company Value</h5>
                        <h3>Who Are You</h3>
                        <p className="lead">Coop Bank is a company of the envato Foundation through its banking activities to contribute in overcoming the structural causes of poverty in Australia.</p>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <h5>Our Mission</h5>
                            <p>Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Responsibilty</h5>
                            <p>Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                        </div>
                        </div>
                    </div>             
                    {/* Col boxes-services */}
                    <div className="col-md-12 padding-top">
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
                            <h4>I want to save or <br />invest</h4>
                            <span>Advise your decisions</span>
                            <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                        </div>
                        {/* End item-boxe-services */}
                        {/* item-boxe-services */}
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item-boxed-service">
                            <h4>Request items <br />online</h4>
                            <span>We offer you tools</span>
                            <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                            </div>
                        </div>
                        {/* End item-boxe-services */}
                        </div>
                        {/* End boxes-services */}
                    </div>
                    {/* End Col boxes-services */}
                    </div>
                </div>
                {/* End Container Area - Boxes Services */}
                </div>
            </div>
            {/* End Info Content - Boxes Services*/}
            {/* Info Content  - Clients Downloads Area */}
            <div className="parallax-window" data-parallax="scroll" data-image-src="img/parallax-img/parallax-01.jpg">
                {/* Content Parallax*/}
                <div className="opacy_bg_02 paddings">
                <div className="container">
                    <div className="row">
                    {/* title-downloads */}             
                    <h1 className="title-downloads">
                        <span className="logo-clients">CF BANK</span> Has more than
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
                    {/* Image Clients Downloads */} 
                    <ul className="image-clients-downloads">
                        <li><img src="img/clients-downloads/1.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/2.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/3.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/4.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/5.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/6.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/7.jpg" alt="" /></li>
                        <li><img src="img/clients-downloads/8.jpg" alt="" /></li>
                    </ul>
                    {/* End Image Clients Downloads */}   
                    </div>
                </div> 
                </div>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content  - Clients Downloads Area */}
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
                            <li><i className="fa fa-envelope" /> <a href="#">jm@iwthemes.com</a></li>
                            <li><i className="fa fa-headphones" /> <a href="#">+56 3456298</a></li>
                            <li><i className="fa fa-facebook" /> <a href="#">@jeniffer</a></li>
                            <li><i className="fa fa-linkedin" /> <a href="#">jenifer</a></li>
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
                            <li><i className="fa fa-envelope" /> <a href="#">fg@iwthemes.com</a></li>
                            <li><i className="fa fa-headphones" /> <a href="#">+56 3456298</a></li>
                            <li><i className="fa fa-facebook" /> <a href="#">@jeniffer</a></li>
                            <li><i className="fa fa-linkedin" /> <a href="#">jenifer</a></li>
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
                            <li><i className="fa fa-envelope" /> <a href="#">ms@iwthemes.com</a></li>
                            <li><i className="fa fa-headphones" /> <a href="#">+56 3456298</a></li>
                            <li><i className="fa fa-facebook" /> <a href="#">@jeniffer</a></li>
                            <li><i className="fa fa-linkedin" /> <a href="#">jenifer</a></li>
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
                            <li><i className="fa fa-envelope" /> <a href="#">jr@iwthemes.com</a></li>
                            <li><i className="fa fa-headphones" /> <a href="#">+56 3456298</a></li>
                            <li><i className="fa fa-facebook" /> <a href="#">@jeniffer</a></li>
                            <li><i className="fa fa-linkedin" /> <a href="#">jenifer</a></li>
                        </ul>
                        </div>
                    </div>
                    {/* End Item Team Member*/}  
                    <div className="col-md-12 text-center margin-top">
                        <a href="#" className="btn btn-primary">Get started for free</a>
                    </div>
                    </div>
                </div> 
                </section>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content Team Members*/}
            {/* Info Content News*/}
            <div className="content_info">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                <h2><span>Last</span> News</h2>
                <p className="lead">Keep informed and updated on all news related to your bank.</p>
                </div>
                {/* End title-vertical-line*/}
                {/* Container Blog Post */}
                <div className="container">
                {/*Blog Post Items*/}
                <div className="row paddings">
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
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
                        <img src="img/blog-img/thumbs/1.jpg" alt="" />
                        <div className="post-meta">
                            <ul>
                            <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
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
                        <p>Find all the support and information they need to make all decisions about saving for your future.</p>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                    </div>
                    {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
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
                        <img src="img/blog-img/thumbs/2.jpg" alt="" />
                        <div className="post-meta">
                            <ul>
                            <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
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
                        <p>Meet here all our range of products and services, rules of our products and everything related to your savings in pension.</p>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                    </div>
                    {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
                    {/*Item Blog Post*/}
                    <div className="item-blog-post">
                        {/*Head Blog Post*/}
                        <div className="head-item-blog-post">
                        <i className="fa fa-cubes" />
                        <h3>Zone Saver</h3>
                        </div>
                        {/*End Head Blog Post*/}  
                        {/*Img Blog Post*/}
                        <div className="img-item-blog-post">
                        <img src="img/blog-img/thumbs/3.jpg" alt="" />
                        <div className="post-meta">
                            <ul>
                            <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
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
                        <p>Accompany relevant share you mean, renewed and information of interest to learn to save you and your projects come true.</p>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                    </div>
                    {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                </div>
                {/*End Blog Post Items*/}
                </div>
                {/* End Container Blog Post */}
            </div>
            {/* End Info Content News*/}
        </div>

    )
}

export default AboutUs